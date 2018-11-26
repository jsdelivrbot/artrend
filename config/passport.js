/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const User = mongoose.model('User');

passport
    .use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
    }, (username, password, done) => {
        User.findOne({ username })
            .then((user) => {
                user.validatePassword(password, function (result) {
                    if(!user || !result) {
                        return done(null, false, { errors: { 'username or password': 'is invalid' } });
                    }
                    return done(null, user);
                });
            }).catch(done);
    }));