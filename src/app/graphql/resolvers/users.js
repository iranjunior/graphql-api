const userController = require('../../controllers/userController')

module.exports = {
  Query: {
    users: async (root) => {
      const users = await userController.index()
      return users
    }
  },
  Mutation: {
    storeUser: async (root, args, ctx, info) => {
      const user = await userController.store(args)
      return user
    }
  }
}
