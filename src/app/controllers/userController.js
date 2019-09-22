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
  },
  show: async (email) => {
    const user = await Users.findOne({ where: { email } })

    return user
  }/* ,
  update: async (user) => {
    console.log('user before:', user)
    const users = await Users.update(user, { where: { id: user.id } })
    console.log('user :', users)
    user = await Users.findOne({ where: { email: users.email } })

    return user
  } */

}
