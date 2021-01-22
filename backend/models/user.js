const {Sequelize, DataTypes} = require("sequelize");
const sequelize = require("../DBinstance");

const User = sequelize.define("User", {
    id : {
        type : DataTypes.NUMBER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type : DataTypes.STRING,
        allowNull : false
    },
    surname : {
        type : DataTypes.STRING,
        allowNull : false
    },
    pseudo : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    password : {
        type : DataTypes.STRING,
        allowNull : false
    },
    job : {
        type : DataTypes.STRING,
        allowNull : false
    },
    moderator : {
        type : DataTypes.BOOLEAN,
        defaultValue : false
    }
},{
    timestamps : false
});

module.exports = sequelize.models.User;