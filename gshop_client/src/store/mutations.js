/**
 @author BY
 @date 2019-08-20 10:12
 */
// 包含n个由action触发用于直接更新状态的方法的对象模块
import { RECEIVE_ADDRESS, RECEIVE_FOOD_TYPE, RECEIVE_SHOPS } from "./mutation-types";
export default {
    [RECEIVE_ADDRESS](state, {address}) {
        state.address = address
    },
    [RECEIVE_FOOD_TYPE](state, {foodType}){
        state.foodType = foodType
    },
    [RECEIVE_SHOPS](state, {shops}) {
        state.shops = shops
    }
}