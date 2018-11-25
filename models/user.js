/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    _id: {
        type: mongoose.Schema.ObjectId,
        auto: true
    },
    username: {
        type: String,
        required: true
    },
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