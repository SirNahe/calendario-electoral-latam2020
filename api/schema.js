const flagsModel = require('./models/flagsModel')
const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Flag {
    id: ID
    title: String
    month: String
    type: String
    src: String
    path: String
  }

  type Query {
    flags: [Flag]
  }
`

const resolvers = {
  Query: {
    flags () {
      return flagsModel.list()
    }
  }
}

module.exports = { typeDefs, resolvers }
