const path = require('path')
const { fileLoader, mergeTypes } = require('merge-graphql-schemas')

const typeArrays = fileLoader(path.join(__dirname, './'))
const typeMerged = mergeTypes(typeArrays)

module.exports = typeMerged
