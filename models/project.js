/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({

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
    sceneId: mongoose.Types.ObjectId,
    accessType: {
        type: Number,
        default: 0
    },
    invitedUsers: [{
        userId: mongoose.Types.ObjectId,
        accessLevel: {
            type: Number,
            default: 1
        }
    }],
    create_date: {
        type: Date,
        default: Date.now
    }

});

const Project = module.exports = mongoose.model('Project', projectSchema);

module.exports.getProjects = function (callback, limit) {
    Project.find(callback).limit(limit);
};

module.exports.getProjectById = function (id, callback) {
    Project.findById(id, callback);
};

module.exports.addProject = function (project, callback) {
    Project.create(project, callback);
};

module.exports.updateProject = function (id, project, options, callback) {
    const query = {_id: id};
    const update = {
        name:  project.name,
        imgUrl: project.imgUrl,
        invitedUsers: project.invitedUsers,
        accessType: project.accessType
    };
    Project.findOneAndUpdate(query, update, options, callback);
};

module.exports.deleteProject = function (id, callback) {
    const query = {_id: id};
    Project.remove(query, callback);
};