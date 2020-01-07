// 1.创建5个组件
import Home from "../components/Home/Home.vue"
import Category from "../components/Category/Category.vue"
import Optim from "../components/Optim/Optim.vue"
import Shopping from "../components/Shopping/Shopping.vue"
import Mine from "../components/Mine/Mine.vue"

import VueRouter from "vue-router"
import Vue from "vue"

// 全局注册两个组件  router-link router-view
Vue.use(VueRouter)


//二级组件
import Hot from "../components/Home/components/hot.vue"
import Dress from "../components/Home/components/dress.vue"

// 2.注册路由表
let routes = [
    //进入页面默认home
    {
        path: "/",
        redirect: '/home'
    },
    {
        path: "/home",
        component: Home,
        children: [
            //  二级路由这样写不用加/斜杠
            // 推荐版块
            { path: 'hot', component: Hot },
            // 服饰版块
            { path: 'dress', component: Dress },
            // // 鞋包版块
            // { path: 'box', component: Box },
            // // 母婴版块
            // { path: 'mbaby', component: Mbaby },
            // // 百货版块
            // { path: 'general', component: General },
            // // 食品版块
            // { path: 'food', component: Food },
            // // 内衣版块
            // { path: 'shirt', component: Shirt },
            // // 男装版块
            // { path: 'man', component: Man },
            // // 电器版块
            // { path: 'ele', component: Ele },
            // 用户访问/home，就默认展示/home/hot
            { path: '/home', redirect: '/home/hot' }
        ]
    },
    {
        path: "/category",
        component: Category
    },
    {
        path: "/optim",
        component: Optim
    },
    {
        path: "/shopping",
        component: Shopping
    },
    {
        path: "/mine",
        component: Mine
    }
]

// 3.定义路由
let router = new VueRouter({
    routes
})

// 4.导出路由
export default router;