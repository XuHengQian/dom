import Vue from 'vue'
import Vuex from 'vuex'
import homeStore from './homeStore/homeStore'
import aboutStore from './aboutStore/aboutStore'
import personStore from './PersonStore/personStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
    homeStore,
    aboutStore,
    personStore
  }
})
