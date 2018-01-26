const stories = require('./story/stories')
const collections = require('./collect/collections')
const hourse_search = require('./browse/hourse_search')
const experience = require('./browse/experience')
const experiencelist = require('./browse/experiencelist')
const hometype = require('./browse/home_type')

module.exports = () => {
  return {
    stories,
    collections,
    hourse_search,
    experience,
    hometype,
    experiencelist
  }
}
