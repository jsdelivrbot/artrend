/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

const jwt = require('express-jwt');

// const getTokenFromHeaders = (req) => {
//     const { headers: { authorization } } = req;
//     if(authorization
//         // && (authorization.split(' ')[0] === 'Bearer' || authorization.split(' ')[0] === 'Token')
//     ){
//         return authorization.split(' ')[1];
//     }
//     return null;
// };

const auth = {
    required: jwt({
        secret: 'secret',
        userProperty: 'payload',
        // getToken: getTokenFromHeaders,
    }),
    optional: jwt({
        secret: 'secret',
        userProperty: 'payload',
        // getToken: getTokenFromHeaders,
        credentialsRequired: false,
    }),
};

module.exports = auth;
