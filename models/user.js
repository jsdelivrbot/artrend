/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    // _id: {
    //     type: mongoose.Schema.ObjectId,
    //     auto: true
    // },
    // phone: {
    //     type: String,
    //     required: true
    // },
    // create_date: {
    //     type: Date,
    //     default: Date.now
    // }
    name: String,
    projects: [String]
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUsers = function (callback, limit) {
    User.find(callback).limit(limit);
};

module.exports.addUser = function (user, callback) {
    User.create(user, callback);
};