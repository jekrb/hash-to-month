var hash = require('hash-index')

module.exports = function (value) {
  return hash(value, 12)
}
