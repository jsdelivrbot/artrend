/*
 * Material: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018. 
 */

const mongoose = require('mongoose');

const materialSchema = mongoose.Schema({

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
    texturePath: {
        type: String,
        required: true
    },
    textureQualities: [{
        quality: String,
        size: Number,
        fileName: String
    }],
    settings: {
        scaleX: {
            type: Number,
            default: 1.0
        },
        scaleY: {
            type: Number,
            default: 1.0
        },
        roughness: {
            type: Number,
            default: 0.5
        },
        metalness: {
            type: Number,
            default: 0.5
        }
    }

});

const Material = module.exports = mongoose.model('Material', materialSchema);

module.exports.getMaterials = function (callback, limit) {
    Material.find(callback).limit(limit);
};

module.exports.getMaterialById = function (id, callback) {
    Material.findById(id, callback);
};

module.exports.addMaterial = function (material, callback) {
    Material.create(material, callback);
};

module.exports.updateMaterial = function (id, material, options, callback) {
    const query = {_id: id};
    const update = {
        name: material.name,
        imageURL: material.imageURL,
        accessType: material.accessType,
        textureQualities: material.textureQualities,
        settings: material.invitedUsers
    };
    Material.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteMaterial = function (id, callback) {
    const query = {_id: id};
    Material.remove(query, callback);
};