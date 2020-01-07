import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible'

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
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.axios=axios


new Vue({
  render: h => h(App),
  router
}).$mount('#app')



