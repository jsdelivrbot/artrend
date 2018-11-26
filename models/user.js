/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
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

UserSchema.pre('save', function (next) {
    const user = this;
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.validatePassword = function validatePassword(password, callback) {
    bcrypt.compare(password, this.password, function (err, result) {
        return callback(result);
    });
};

UserSchema.methods.generateJWT = function generateJWT() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        username: this.username,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
};

UserSchema.methods.toAuthJSON = function toAuthJSON() {
    return {
        _id: this._id,
        username: this.username,
        token: this.generateJWT(),
    };
};

UserSchema.statics.getUsers = function (callback, limit) {
    User.find(callback).limit(limit);
};

UserSchema.statics.getUserById = function (id, callback) {
    User.findById(id, callback);
};

UserSchema.statics.addUser = function (user, callback) {
    User.create(user, callback);
};

UserSchema.statics.updateUser = function (id, user, options, callback) {
    const query = {_id: id};
    const update = {
        fullname: user.fullname,
        phone: user.phone,
        imgUrl: user.imgUrl,
        projects: user.projects
    };
    User.findOneAndUpdate(query, update, options, callback);
};

UserSchema.statics.deleteUser = function (id, callback) {
    const query = {_id: id};
    User.remove(query, callback);
};

const User = module.exports = mongoose.model('User', UserSchema);