import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const state = {
  duration: {},
  userMsg: {},
  persons: {
    adult: 1,
    child: 0,
    baby: 0,
    pet: false
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
