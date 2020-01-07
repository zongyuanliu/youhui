import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible'
import { Lazyload } from 'vant';

import error from "./assets/error.jpg"
import loading from "./assets/loading.gif"

Vue.use(Lazyload,{
  preLoad: 1.3,
  error: error,
  loading: loading,
  attempt: 3
});


import "@/assets/resets.css"
import 'swiper/dist/css/swiper.css'

//注册全局组件
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper, /* { default global options } */)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')

