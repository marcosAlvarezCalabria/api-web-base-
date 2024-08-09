// users.controllers.js

const mongoose = require('mongoose');
const User = require('../models/user/user.model');
const jwt = require("jsonwebtoken");

module.exports.create = (req, res, next) => {
    const userData = req.body;
    User.findOne({ email: userData.email })
        .then(userFound => {
            if (userFound) {
                res.status(409).json({ message: "User validation failed", errors: { email: { message: "Email already exists" } } });
            } else {
                User.create(userData)
                    .then(user => res.json(user))
                    .catch(error => {
                        if (error instanceof mongoose.Error.ValidationError) {
                            res.status(400).json({ errors: error.errors });
                        } else {
                            next(error);
                        }
                    });
            }
        });
};

module.exports.update = (req, res, next) => {
    const { name, email, birthDate, genre, location, favorites } = req.body;
    const body = { name, email, birthDate, genre, location, favorites };

    User.findByIdAndUpdate(req.user.id, body, { runValidators: true, new: true })
        .then(user => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: "User not found" });
            }
        })
        .catch(next);
};

module.exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user) {
                user.checkPassword(req.body.password)
                    .then(match => {
                        if (match) {
                            const accessToken = jwt.sign({ sub: user.id, exp: Math.floor(Date.now() / 1000) + 3600 }, process.env.JWT_SECRET);
                            res.json({ accessToken });
                        } else {
                            res.status(401).json({ message: "Invalid credentials" });
                        }
                    })
                    .catch(next);
            } else {
                res.status(401).json({ message: "Invalid credentials" });
            }
        })
        .catch(next);
};

module.exports.profile = (req, res, next) => {
    res.json(req.user);
};

module.exports.delete = (req, res, next) => {
    console.log(req.user.id); // Asegúrate de que el ID del usuario esté presente
    User.findByIdAndDelete(req.user.id)
        .then(user => {
            if (user) {
                console.info(`User with name ${user.name} has been deleted`);
                res.status(204).end(); // Responde con un 204 No Content
            } else {
                res.status(404).json({ message: "User not found" });
            }
        })
        .catch(next);
};
