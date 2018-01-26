const mutations = {
  setDuration (state, {params, para}) {
    let arr = [...new Set(para.data)]
    state.vuex_hourses = arr
    console.log('state.vuex_hourses', state.vuex_hourses)
    state.duration = Object.assign({}, params)
  },
  setInfo (state, userMsg) {
    state.userMsg = userMsg
  },
  setPerson (state, params) {
    state.persons = params
  },
  setMyMessage (state, params) {
    state.myMessage.push(params)
  },
  setSearch_keyword (state, {params, para}) {
    let arr = [...new Set(para.data)]
    state.vuex_hourses = arr
    state.search_keyword = params
  },
  setFrom (state, {startTime, endTime}) {
    state.from = new Date(startTime).getTime()
    state.to = new Date(endTime).getTime()
  }
}

export default mutations
