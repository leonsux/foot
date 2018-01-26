import axios from 'axios'

const actions = {
  setDuration (context, params) {
    let pa = {
      'from': new Date(params.startTime).getTime(),
      'to': new Date(params.endTime).getTime(),
      'search_keyword': ''
    }
    getInfo(pa, (para) => {
      context.commit('setDuration', {params, para})
    })
  },
  setSearch_keyword (context, params) {
    getInfo(params, (para) => {
      context.commit('setSearch_keyword', {params, para})
    })
  }
}

function getInfo (params, cb) {
  axios.get('/api/browse/hoursesearch.php', {params: params})
  .then(res => {
    cb(eval('(' + res.data + ')').data)
  })
}

export default actions
