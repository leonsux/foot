const mutations = {
  setDuration (state, params) {
    state.duration = params
  },
  setInfo (state, userMsg) {
    state.userMsg = userMsg
  },
  setPerson (state, params) {
    state.persons = params
  },
  setMyMessage (state, params) {
    state.myMessage.push(params)
  }
}

export default mutations
