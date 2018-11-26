/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

const express = require('express');
const router = express.Router();

//MODELS
User = require('../models/user');

passport = require('../config/passport');
router.use('/api', require('./api'));

// GET route for reading data
router
    // .get('/', function (req, res) {
        // if (!req.session && !req.session.userId) {
        //     return res.sendFile(appRoot + '/views/signIn.html');
        // } else {
        //     return res.redirect('/rtdc/projects');
        // }
        // return res.send('Hello');
    // })

    .get('/dashboard', function (req, res) {
        return res.sendFile(appRoot + '/public/views/dashboard.html')
    })

    .get('/guest', function (req, res) {
        req.session.guest = true;
        return res.redirect('/dashboard');
    })

    .get('/logout', function (req, res, next) {
        if (req.session && req.session.userId) {
            // delete session object
            req.session.destroy(function (err) {
                if (err) {
                    return next(err);
                } else {
                    return res.redirect('/');
                }
            });
        }
    })

    .get('/:_id/projects', function (req, res, next) {

    });

module.exports = router;