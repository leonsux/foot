const mutations = {
  setDuration (state, params) {
    state.duration = params
  },
  setInfo (state, userMsg) {
    state.userMsg = userMsg
  },
  setPerson (state, params) {
    state.persons = params
  }
}

export default mutations
