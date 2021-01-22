const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

exports.signup = (req, res, next) => {
    //hashage du mot de passe
    bcrypt.hash(req.body.user.password, 10)
    .then(passwordHashed => {
        User.create({
            name : req.body.user.name,
            surname : req.body.user.surname,
            pseudo : req.body.user.pseudo,
            email : req.body.user.email,
            password : passwordHashed,
            job : req.body.user.job
        })
        .then(() => res.status(201).json({message : "Utilisateur créé."}))
        .catch(error => res.status(400).json({error}));
    })
    .catch(error => res.status(500).json({error}));
};

exports.login = (req, res, next) => {
    //recherche de l'utilisateur dans la base de données
    User.findOne({where : {email : req.body.user.email}})
    .then(user => {
        //si l'utilisateur n'existe pas
        if(user === null){
            return res.status(401).json({error : "Identifiants incorrects."});
        }
        //si l'utilisateur existe, vérification du mot de passe
        else{
        bcrypt.compare(req.body.user.password, user.password)
        .then(valid => {
            //si le mot de passe est incorrect
            if(!valid){
                return res.status(401).json({error : "Identifiants incorrects."});
            }
            //si le mot de passe est correct, création du token de session
            res.status(200).json({
                userId : user.id,
                token : jwt.sign({userId : user.id}, "wQ5EW3QAuK5TT1G", {expiresIn : "30 days"}), //le code de salage est en clair pour que ça fonctionne pour
                moderator : user.moderator                                                        //mon mentor et le jury de OpenClassRooms
            });
        })
        .catch(error => res.status(500).json({error}));}
    })
    .catch(error => res.status(500).json({error}));
};