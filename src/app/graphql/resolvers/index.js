const path = require('path')
const mergeGraphqlShemas = require('merge-graphql-schemas')
const { fileLoader } = mergeGraphqlShemas

const files = path.join(__dirname, './')

const resolvers = fileLoader(files)

module.exports = resolvers
