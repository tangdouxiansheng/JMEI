import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/flexble.js"
import axios from "axios"
Vue.prototype.$axios = axios

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { Indicator } from 'mint-ui';
import './module/gd.js'
Vue.use(MintUI);
axios.interceptors.request.use((config)=>{
  Indicator.open("正在骑马赶来的路上");
  return config;
})
axios.interceptors.response.use((res)=>{
  Indicator.close();
  return res;
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
