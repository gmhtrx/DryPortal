const mongoose = require("mongoose");
const passport = require("passport");
const settings = require("../../config/settings");
require("../../config/passport");
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../../models/user");


//post to register
router.post("/register", function(req,res) {
    if (!req.body.username || !req.body.password) {
        res.json({success: false, msg: "Please enter username and password"});
    } else {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,

        });
        newUser.save(function(err) {
            if (err) {
                return res.json({success: false, msg: "Username already exists"});
            }
            res.json({success: true, msg: "Successfully created new user"});
        });
    }
});

//post to login
router.post("/login", function(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if(err) throw err;

        if(!user) {
            res.status(401).send({success: false, msg: "Authentication failed. Username not found"});
        } else {
            user.comparePassword(req.body.password, function(err, isMatch) {
                if(isMatch && !err) {
                    const token = jwt.sign(user.toJSON(), settings.secret);
                    res.json({success: true, token: "JWT " + token});
                } else {
                    res.status(401).send({success: false, msg: "Authentication failed. wrong password"})
                }
            });
        }
    });
});

module.exports = router;
