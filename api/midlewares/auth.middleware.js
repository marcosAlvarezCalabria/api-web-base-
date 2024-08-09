// auth.middleware.js

const jwt = require("jsonwebtoken");
const User = require("../models/user/user.model");

module.exports.checkAuth = (req, res, next) => {
    const [schema, token] = req.headers?.authorization?.split(" ") || [];
    
    if (schema?.toUpperCase() === "BEARER" && token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: "Unauthorized" });
            }

            const sub = decoded.sub;

            User.findById(sub)
                .then(user => {
                    if (user) {
                        req.user = user; // Almacena el usuario en el request
                        next(); // Continua con la siguiente función middleware o controlador
                    } else {
                        res.status(401).json({ message: "Unauthorized" });
                    }
                })
                .catch(next);
        });
    } else {
        res.status(401).json({ message: "Unsupported authorization schema" });
    }
};
