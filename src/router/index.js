import Vue from 'vue'
import Router from 'vue-router'

/***
 * @author zhouzy
 */

Vue.use(Router);

//主页
const HomePage = () => import(/*webpackChunkName: "index"*/'@Comps/home-page.vue');

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: HomePage,
        meta:{ title: '首页'},
        name: 'home',
    }
];

export default new Router({
    mode : 'hash',
    routes
})
