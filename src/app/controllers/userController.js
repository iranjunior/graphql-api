const Users = require('../models').users

module.exports = {
  store: async user => {
    const userExist = await Users.findOne({ where: { email: user.email } })

    if (userExist) {
      return userExist.dataValues
    }

    const users = await Users.create(user)

    return users
  },
  index: async () => {
    const users = await Users.findAll()

    return users
  }
}
