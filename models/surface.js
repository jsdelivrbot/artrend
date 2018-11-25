/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018. 
 */

const mongoose = require('mongoose');

const surfaceSchema = mongoose.Schema({

    _id: {
        type: mongoose.Schema.ObjectId,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    imgUrl: String,
    color: String

});

const Surface = module.exports = mongoose.model('Surface', surfaceSchema);

module.exports.getSurfaces = function (callback, limit) {
    Surface.find(callback).limit(limit);
};

module.exports.getSurfaceById = function (id, callback) {
    Surface.findById(id, callback);
};

module.exports.addSurface = function (surface, callback) {
    Surface.create(surface, callback);
};

module.exports.updateSurface = function (id, surface, options, callback) {
    const query = {_id: id};
    const update = {
        name: surface.name,
        imgUrl: surface.imgUrl,
        color: surface.color
    };
    Surface.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteSurface = function (id, callback) {
    const query = {_id: id};
    Surface.remove(query, callback);
};