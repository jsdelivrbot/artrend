/*
 * Environment: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018. 
 */

const mongoose = require('mongoose');

const environmentSchema = mongoose.Schema({

    _id: {
        type: mongoose.Schema.ObjectId,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    imgUrl: String,
    accessType: {
        type: Number,
        default: 0
    },
    type: String, //evening, morning, sea
    rotation: {
        type: Number,
        default: 0.0
    },
    lights: [{
        type: String, //ambient
        position: {
            x: {
                type: Number,
                default: 0.0
            },
            y: {
                type: Number,
                default: 0.0
            },
            z: {
                type: Number,
                default: 0.0
            },
        },
        color: String,
        lookAt: {
            x: {
                type: Number,
                default: 0.0
            },
            y: {
                type: Number,
                default: 0.0
            },
            z: {
                type: Number,
                default: 0.0
            },
        },
        intensity: {
            type: Number,
            default: 0.5
        }
    }]

});

const Environment = module.exports = mongoose.model('Environment', environmentSchema);

module.exports.getEnvironments = function (callback, limit) {
    Environment.find(callback).limit(limit);
};

module.exports.getEnvironmentById = function (id, callback) {
    Environment.findById(id, callback);
};

module.exports.addEnvironment = function (environment, callback) {
    Environment.create(environment, callback);
};

module.exports.updateEnvironment = function (id, environment, options, callback) {
    const query = {_id: id};
    const update = {
        name: environment.name,
        imgUrl: environment.imgUrl,
        accessType: environment.accessType,
        type: environment.type,
        rotation: environment.rotation,
        lights: environment.lights
    };
    Environment.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteEnvironment = function (id, callback) {
    const query = {_id: id};
    Environment.remove(query, callback);
};