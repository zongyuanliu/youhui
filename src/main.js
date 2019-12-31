import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible'


import "@/assets/resets.css"
import 'swiper/dist/css/swiper.css'

//注册全局组件
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

