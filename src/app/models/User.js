const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const uuid = require('short-uuid')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        defaultValue: uuid.generate()
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false

      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      hooks: {
        beforeCreate: async user => {
          if (user.password) {
            user.password = await bcrypt.hash(user.password, 10)
          }
          user.createdAt = new Date()
          user.updatedAt = new Date()
        },

        beforeSave: async user => {
          if (user.password) {
            user.password = await bcrypt.hash(user.password, 10)
          }
          user.updated_at = new Date()
        }
      }
    }
  )

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }

  User.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET)
  }

  User.prototype.findUser = function () {
    return true
  }
  return User
}
