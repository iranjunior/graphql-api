const userController = require('../../controllers/userController')

module.exports = {
  Query: {
    hello: (_) => {
      return 'Hello World'
    }
  },
  Mutation: {
    storeUser: async (root, args, ctx, info) => {
      const user = await userController.store(args)
      return user
    }
  }
}
