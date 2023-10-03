const { Sequelize } = require("sequelize")
const sequelize = require("../util/database")

const User = sequelize.define("user", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.toString,
        allowNull: false
    },
    email: {
        type: Sequelize.toString,
        allowNull: false
    }
})

module.exports = User