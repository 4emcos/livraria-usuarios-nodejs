const jwt = require('jsonwebtoken');
const constantes = require('../config/constantes');

const seguranca = {
    autorizaJWT: (req,res,next) => {
        if(!req.headers.authorization || req.headers.authorization.split(' ')[0] !== 'Bearer')
        return res.status(401).send ({auth: false, meassage: 'Token não informado' });

        let token = req.headers.authorization.split(' ')[1];       

        jwt.verify(token, constantes.JWT_SECRET, (err,decoded) => {
            if (err)
            return res.status(500).send({
                auth: false, message: 'Token não autenticado.'
            });
        
        req.username = {
            username: decoded.username,
            roles: decoded.roles,
            email: decoded.email,
            isAdmin : decoded.isAdmin
        };

        console.log(req.username);
        next();
        });
        
    }
}

module.exports = seguranca;