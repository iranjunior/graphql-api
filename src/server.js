const { GraphQLServer } = require('graphql-yoga')
const resolvers = require('./app/graphql/resolvers')
const typeDefs = require('./app/graphql/typeDefs')

/* const typeDefs = `
    type Query {
        hello: String!
      }

`; */
/*
const resolvers = {
  Query: {
    hello: (_, {}) => {
      return "Hello World";
    }
  }
};
 */
const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => console.log('graphql iniciado'))
