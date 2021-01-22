const {Sequelize, DataTypes} = require("sequelize");
const { databaseVersion } = require("../DBinstance");
const sequelize = require("../DBinstance");

const Message = sequelize.define("Message", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    userId : {
        type : DataTypes.NUMBER,
        allowNull : false
    },
    message : {
        type : DataTypes.STRING,
        allowNull : false
    },
    createdAt : {
        type : DataTypes.DATE,
        allowNull : false
    },
    updatedAt : {
        type : DataTypes.DATE,
        allowNull : true
    }
});

module.exports = sequelize.models.Message;