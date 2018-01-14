import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const state = {
  duration: {},
  userMsg: {}
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
