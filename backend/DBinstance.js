const {Sequelize} = require("sequelize");

const DBinstance = new Sequelize("groupomaniaDB", "groupomania","Fnb6egNYrY", {dialect : "mysql", host : "localhost"});

module.exports = DBinstance;