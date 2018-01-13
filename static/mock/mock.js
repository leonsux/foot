const stories = require('./story/stories')
const collections = require('./collect/collections')
const hourse = require('./browse/hourse')
const experience = require('./browse/experience')
const experiencelist = require('./browse/experiencelist')
const hometype = require('./browse/home_type')

module.exports = () => {
  return {
    stories,
    collections,
    hourse,
    experience,
    hometype,
    experiencelist
  }
}
