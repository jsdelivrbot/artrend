/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.ObjectId,
        auto: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    // passwordConf: {
    //     type: String,
    //     required: true,
    // },
    fullname: String,
    phone: String,
    imgUrl: String,
    projectsId: [String],
    create_date: {
        type: Date,
        default: Date.now
    }
});

const User = module.exports = mongoose.model('User', userSchema);

userSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    })
});

module.exports.getUsers = function (callback, limit) {
    User.find(callback).limit(limit);
};

module.exports.getUserById = function (id, callback) {
    User.findById(id, callback);
};

module.exports.addUser = function (user, callback) {
    User.create(user, callback);
};

module.exports.updateUser = function (id, user, options, callback) {
    const query = {_id: id};
    const update = {
        fullname: user.fullname,
        phone: user.phone,
        imgUrl: user.imgUrl,
        projects: user.projects
    };
    User.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteUser = function (id, callback) {
    const query = {_id: id};
    User.remove(query, callback);
};

module.exports.authenticate = function (username, password, callback) {
    User.findOne({username: username})
        .exec(function (err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            bcrypt.compare(password, user.password, function (err, result) {
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }
            })
        })
};