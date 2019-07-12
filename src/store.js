import Vue from 'vue'
import Vuex from 'vuex'
// import landres from "./components/langres"
import shop from "./components/shop"

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    // landres
    shop
  }
})
