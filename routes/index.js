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

router
    .get('/dashboard', function (req, res) {
        return res.sendFile(publicPath + '/views/dashboard.html')
    });

module.exports = router;