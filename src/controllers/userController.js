const User = require('../models/user');
const bcrypt = require('bcryptjs');
const config = require('../config');
const jwt = require('jsonwebtoken');

exports.post = async (req, res) => {
    var hashPassword = bcrypt.hashSync(req.body.password, 8);
    try {

         await User.create({
             name: req.body.name,
             password: hashPassword
         })
                   .then(data => { res.status(201).send(data) } );

    } catch (msg) {

        res.status(400).send(msg);
        
    }
};

exports.token = async (req, res) => {
    try {
        
        await User.findOne({ name: req.body.name }, (err, user) => {
            if (!user) return res.status(404).send('Usuário não encontrado');

            var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if(!passwordIsValid) return res.status(401).send('Senha incorreta!');

            var token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: config.expiresIn
            });
            res.status(200).send({ auth: true, token: token });
        });
    } catch (msg) {
        res.status(400).send(msg)
    }

};

exports.authorization = async (req, res, next) => {
    try {

        var token = req.headers['x-api-token'];
        if(!token) return res.status(403).send('Token não informado!');

        jwt.verify(token, config.secret, (err, decoded) => {
            if(err) return res.status(500).send({ auth: false, message: 'Token inválido, realize a autenticação!'});

            req.userId = decoded.id;
            next();
        });
    } catch (msg) {
        res.status(400).send(msg);
    }
};