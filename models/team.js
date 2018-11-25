/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018. 
 */

const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({

    _id: {
        type: mongoose.Schema.ObjectId,
        auto: true
    },
    name: {
        type: String,
        required: true
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    imgUrl: String,
    members: [{
        _id: mongoose.Types.ObjectId,
        name: String,
        accessLevel: Number
    }]

});

const Team = module.exports = mongoose.model('Team', teamSchema);

module.exports.getTeams = function (callback, limit) {
    Team.find(callback).limit(limit);
};

module.exports.getTeamById = function (id, callback) {
    Team.findById(id, callback);
};

module.exports.addTeam = function (team, callback) {
    Team.create(team, callback);
};

module.exports.updateTeam = function (id, team, options, callback) {
    const query = {_id: id};
    const update = {
        name: team.name,
        imgUrl: team.imgUrl,
        members: team.members
    };
    Team.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteTeam = function (id, callback) {
    const query = {_id: id};
    Team.remove(query, callback);
};