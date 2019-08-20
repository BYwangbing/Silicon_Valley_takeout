/**
 @author BY
 @date 2019-08-20 10:12
 */
import { reqAddress, reqFoodTypeList, reqShops } from '../api'
import { RECEIVE_ADDRESS, RECEIVE_FOOD_TYPE, RECEIVE_SHOPS } from "./mutation-types";

export default {
    // 异步获取地址
    async getAddress({commit, state}) {
        // 发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude;
        const result = await reqAddress(geohash);
        // 提交一个mutation
        if (result.code === 0) {
            const address = result.data;
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    // 异步获取分类列表
    async getTypeList({commit}) {
        // 发送异步ajax请求
        const result = await reqFoodTypeList();
        if (result.code === 0) {
            commit(RECEIVE_FOOD_TYPE, {foodType: result.data})
        }
    }
}