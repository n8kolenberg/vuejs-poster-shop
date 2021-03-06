import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = process.env.VUE_APP_IMGURURL

Vue.config.productionTip = false

Vue.filter("currency", price => `$${price.toFixed(2)}`);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')