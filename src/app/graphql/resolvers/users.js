const userController = require('../../controllers/userController')

module.exports = {
  Query: {
    users: async (root) => {
      const users = await userController.index()
      return users
    },
    user: async (root, { email }) => {
      const user = await userController.show(email)
      return user
    }
  },
  Mutation: {
    storeUser: async (root, args) => {
      const user = await userController.store(args)
      return user
    }/* ,
    updateUser: async (root, args) => {
      const user = await userController.update(args)
      return user
    } */
  }
}
