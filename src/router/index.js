import Vue from 'vue'
import Router from 'vue-router'

/***
 * @author zhouzy
 */

Vue.use(Router);

//主页
const Agent = () => import(/*webpackChunkName: "index"*/'@comps/agent/main.vue');

const routes = [
    {
        path: '/',
        redirect: '/agent'
    },
    {
        path: '/agent',
        component: Agent,
        meta:{ title: 'agent'},
        name: 'agent',
    }
];

export default new Router({
    mode : 'hash',
    routes
})
