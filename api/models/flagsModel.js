const db = require('../adapter')

function list () {
  return db.get('flags').value()
}

module.exports = { list }
