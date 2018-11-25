/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

const mongoose = require('mongoose');

const modelSchema = mongoose.Schema({

    _id: {
        type: mongoose.Schema.ObjectId,
        auto: true
    },
    name: String,
    fileUrl: {
        type: String,
        required: true
    },
    surfaceBySlot: [{
        slotId: String,
        surfaceId: mongoose.Types.ObjectId
    }],
    accessType: {
        type: Number,
        default: 0
    }

});

const Model = module.exports = mongoose.model('Model', modelSchema);

module.exports.getModels = function (callback, limit) {
    Model.find(callback).limit(limit);
};

module.exports.getModelById = function (id, callback) {
    Model.findById(id, callback);
};

module.exports.addModel = function (model, callback) {
    Model.create(model, callback);
};

module.exports.updateModel = function (id, model, options, callback) {
    const query = {_id: id};
    const update = {
        name:  model.name,
        fileUrl:  model.fileUrl,
        surfaceBySlot: model.surfaceBySlot,
        accessType: model.accessType
    };
    Model.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteModel = function (id, callback) {
    const query = {_id: id};
    Model.remove(query, callback);
};