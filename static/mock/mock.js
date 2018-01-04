const stories = require('./story/stories')
const collections = require('./collect/collections')

module.exports = () => {
  return {
    stories,
    collections
  }
}
