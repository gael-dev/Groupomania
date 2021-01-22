const { error } = require("console");
const Message = require("../models/message");
const User = require("../models/user");

//GET ALL
exports.getAllMessages = (req, res, next) => {
    User.hasOne(Message);
    Message.belongsTo(User, {
        foreignKey : "userId"
    });
    Message.findAll({include : User})
    .then(messages => res.status(200).json(messages))
    .catch(error => res.status(400).json({error}));
};

//GET ONE
exports.getOneMessage = (req, res, next) => {
    Message.findOne({where : {id : req.params.id}})
    .then(message => res.status(200).json(message))
    .catch(error => res.status(400).json({error}));
};

//POST NEW
exports.createMessage = (req, res, next) => {
    Message.create({
        userId : req.body.userId,
        createdAt : Date.now(),
        message : req.body.message
    })
    .then(() => res.status(201).json({message : "Message envoyé!"}))
    .catch(error => res.status(400).json({error}));
};

//MODIFY ONE
exports.modifyMessage = (req, res, next) => {
    console.log(req.body.message);
    Message.update({message : req.body.message, updatedAt : Date.now()}, {
        where : {id : req.params.id}
    })
    .then(() => res.status(200).json({message : "Message modifié."}))
    .catch(error => res.status(400).json({error}));
};

//DELETE ONE
exports.deleteMessage = (req, res, next) => {
    Message.destroy({where : {id : req.params.id}})
    .then(() => res.status(200).json({message : "Message supprimé."}))
    .catch(error => res.status(400).json({error}));
};