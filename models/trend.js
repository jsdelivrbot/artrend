/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018. 
 */

const mongoose = require('mongoose');

const trendSchema = mongoose.Schema({

    _id: {
        type: mongoose.Schema.ObjectId,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    imgUrl: String,
    materialBySurface: [{
        surfaceId: mongoose.Types.ObjectId,
        materialId: mongoose.Types.ObjectId
    }]

});

const Trend = module.exports = mongoose.model('Trend', trendSchema);

module.exports.getTrends = function (callback, limit) {
    Trend.find(callback).limit(limit);
};

module.exports.getTrendById = function (id, callback) {
    Trend.findById(id, callback);
};

module.exports.addTrend = function (trend, callback) {
    Trend.create(trend, callback);
};

module.exports.updateTrend = function (id, trend, options, callback) {
    const query = {_id: id};
    const update = {
        name: trend.name,
        imgUrl: trend.imgUrl,
        materialBySurface: trend.materialBySurface
    };
    Trend.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteTrend = function (id, callback) {
    const query = {_id: id};
    Trend.remove(query, callback);
};