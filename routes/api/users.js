/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('./modules/auth');
const User = mongoose.model('User');

//POST new user route (optional, everyone has access)
router.post('/', auth.optional, (req, res, next) => {
    const userData = req.body;
    if(!userData.username) {
        return res.status(422).json({
            errors: {
                username: 'is required',
            },
        });
    }

    if(!userData.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            }
        });
    }

    User.addUser(userData, function (err, user) {
        if (err || !user) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            user: user.toAuthJSON()
        });
        // return res.json({
        //     user: user
        // });
    });
});

//POST login route (optional, everyone has access)
router.post('/login', auth.optional, (req, res, next) => {
    const userData = req.body;
    if(!userData.username) {
        return res.status(422).json({
            errors: {
                username: 'is required',
            },
        });
    }

    if(!userData.password) {
        return res.status(422).json({
            errors: {
                password: 'is required',
            },
        });
    }

    return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
        if(err) {
            return next(err);
        }

        if(passportUser) {
            const user = passportUser;
            user.token = passportUser.generateJWT();

            return res.json({
                user: user.toAuthJSON()
            });
        }

        return res.status(401);
    })(req, res, next);
});

//GET current route (required, only authenticated users have access)
router.get('/current', passport.authenticate('jwt', { session: false}), (req, res, next) => {


    return res.json('Wokring');

    const { headers: { authorization } } = req;

    if (authorization) {
        // return User.findById(id)
        //     .then((user) => {
        //         if(!user) {
        //             return res.sendStatus(400);
        //         }
        //
        //         return res.json({ user: user.toAuthJSON() });
        //     });
        return res.json('Wokring');
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
});

router.get('/', function (req, res) {
    User.getUsers(function (err, users) {
        if (err) {
            throw err;
        }
        res.json(users);
    })
});

router.get('/:_id', function (req, res) {
    User.getUserById(req.params._id, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);
    })
});

router.put('/:_id', function (req, res) {
    const id = req.params._id;
    const user = req.body;
    User.updateUser(id, user, {}, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);
    })
});

router.delete('/:_id', function (req, res) {
    const id = req.params._id;
    User.deleteUser(id, function (err, user) {
        if (err) {
            throw err;
        }
        res.json(user);
    })
});


module.exports = router;