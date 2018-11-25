/*
 * Scene: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018. 
 */

const mongoose = require('mongoose');

const sceneSchema = mongoose.Schema({

    _id: {
        type: mongoose.Schema.ObjectId,
        auto: true
    },
    modelId: mongoose.Types.ObjectId,
    trendId: mongoose.Types.ObjectId,
    environmentId: mongoose.Types.ObjectId,
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
    }],
    objects3d: [{
        objectId: mongoose.Types.ObjectId,
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
        rotation: Number
    }]

});

const Scene = module.exports = mongoose.model('Scene', sceneSchema);

module.exports.getScenes = function (callback, limit) {
    Scene.find(callback).limit(limit);
};

module.exports.getSceneById = function (id, callback) {
    Scene.findById(id, callback);
};

module.exports.addScene = function (scene, callback) {
    Scene.create(scene, callback);
};

module.exports.updateScene = function (id, scene, options, callback) {
    const query = {_id: id};
    const update = {
        name: scene.name,
        modelId: scene.modelId,
        trendId: scene.trendId,
        environmentId: scene.environmentId,
        lights: scene.lights,
        objects3d: scene.objects3d
    };
    Scene.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteScene = function (id, callback) {
    const query = {_id: id};
    Scene.remove(query, callback);
};