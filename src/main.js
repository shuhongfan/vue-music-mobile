import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mint-ui/index'
import 'normalize.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// axios
import axios from 'axios'
axios.defaults.baseURL = 'https://autumnfish.cn/'
Vue.prototype.axios = axios

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
