const getters = {
  durationToStr (state) {
    if (!state.duration.startTime || !state.duration.endTime) {
      return '所有日期'
    }
    return state.duration.startTime.slice(5) + ' 至 ' + state.duration.endTime.slice(5)
  },
  personsToStr ({persons}) {
    if (!persons.child && !persons.baby && !persons.pet && persons.adult === 1) {
      return {persons: persons, str: '房客'}
    }
    return {persons: persons, str: persons.adult + persons.child + '位' + (persons.baby ? ('，' + persons.baby + '名婴幼儿') : '') + (persons.pet ? '，宠物' : '')}
  }
}

export default getters
