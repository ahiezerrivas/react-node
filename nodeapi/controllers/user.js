const _ = require('lodash')
const User = require("../models/user");

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error:"User not found"
            })
        }

        req.profile = user //adds profile object in req with user info

        next();
    })
}

exports.allUsers = (req, res) => {
    User.find((err, users) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.json({ users })
    }).select("name email updated created")
}

exports.getUser = (req, res) => {
    req.profile.hashed_password = undefined;
    req.profile.salt = undefined;
    return res.json(req.profile);
}

exports.updateUser = (req, res, next) => {
    let user = req.profile
    user = _.extend(user, req.body) // extend - mutate the source object
    user.updated = Date.now()
    user.save(() => {
        if(err) {
            return res.status(400).json({
                error: "You are not authorized to perform this action"
            })
        }
        user.profile.hashed_password = undefined;
        user.profile.salt = undefined
        res.json({user})
    })
}

exports.deleteUser = (req, res, next) => {
    let user = req.profile;
    user.remove((err, user) => {
        if(err){
            return res.status(400).json({
                error: err
            })
        }
        
        res.json({message: "User deleted successfully"})
    })
}