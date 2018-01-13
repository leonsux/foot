const getters = {
  durationToStr (state) {
    console.log(state.duration)
    if (!state.duration.startTime || !state.duration.endTime) {
      return '所有日期'
    }
    return state.duration.startTime.slice(5) + ' 至 ' + state.duration.endTime.slice(5)
  }
}

export default getters
