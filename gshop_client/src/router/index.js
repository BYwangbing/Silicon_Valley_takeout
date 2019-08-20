/**
 @author BY
 @date 2019-08-19 09:55
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Home from '../pages/Home/Home'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

export default new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home, meta: { showFooter: true } },
        {  path: '/search', component: Search,meta: { showFooter: true } },
        {  path: '/order', component: Order, meta: { showFooter: true } },
        {  path: '/profile', component: Profile, meta: { showFooter: true } },
        {  path: '/login', component: Login }
    ]
})