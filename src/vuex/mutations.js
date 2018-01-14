const mutations = {
  setDuration (state, params) {
    state.duration = params
  },
  setInfo (state, userMsg) {
    state.userMsg = userMsg
    // localStorage.userMsg = JSON.stringify(state.userMsg)
  }
  // exit (state) {
  //   state.user_info = {}
  //   localStorage.removeItem('user_info')
  // }
}

export default mutations
