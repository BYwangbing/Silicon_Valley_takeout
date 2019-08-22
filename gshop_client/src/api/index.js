/**
 @author BY
 @date 2019-08-20 09:16
 */
import ajax from './ajax'
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`/api/position/${geohash}`);

// 2、获取食品分类列表
export const reqFoodTypeList = () => ajax('/api/index_category');

// 3、根据经纬度获取商铺列表
export const reqShops = (latitude, longitude) => ajax('/api/shops', {latitude, longitude});

// 4、根据经纬度和关键字搜索商铺列表

// 6、用户名密码登陆
export const reqPwdLogin = ({name, pwd, captcha}) => ajax('/api/login_pwd', {name, pwd, captcha}, 'POST');
// 7、发送短信验证码
export const reqSendcode = (phone) => ajax('/api/sendcode', {phone});
// 8、手机号验证码登陆
export const reqLogin_sms = (phone, code) => ajax('/api/login_sms', {phone, code}, "POST");
// 9、根据会话获取用户信息
// 10、用户登出
export const logout = () => ajax('/api/logout');
