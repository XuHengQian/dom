import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import APIClient from "./network/index" //全局引入

Vue.prototype.$APIClient=APIClient //使用 为了让组件能接收

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
