import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible'

//ly-tab 应用场景，然后每个模块下面又有子模块，可左右拖动
import LyTab from 'ly-tab'
Vue.use(LyTab)

import "@/assets/resets.css"
import 'swiper/dist/css/swiper.css'


// import VueLazyLoad from 'vue-lazyload'
// Vue.use(VueLazyLoad,{
//   error:'./assets/error.jpg', //加载失败的图  
//   loading:'./assets/loading.gif' //加载中的默认图
//   })


import { Lazyload } from 'vant';

import error from "./assets/error.jpg"
import loading from "./assets/loading.gif"

Vue.use(Lazyload,{
  preLoad: 1.3,
  error: error,
  loading: loading,
  attempt: 3
});

//注册全局组件
Vue.config.productionTip = false
Vue.prototype.axios=axios

Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')



