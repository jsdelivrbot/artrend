/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

const express = require('express');
const router = express.Router();

User = require('../../models/user');
Project = require('../../models/project');
Team = require('../../models/team');
Model = require('../../models/model');
Surface = require('../../models/surface');
Material = require('../../models/material');
Scene = require('../../models/scene');
Environment = require('../../models/environment');
Trend = require('../../models/trend');

router.use('/users', require('./users'));

//USERS
router
    //PROJECTS
    .get('/projects', function (req, res) {
        Project.getProjects(function (err, projects) {
            if (err) {
                throw err;
            }
            res.json(projects);
        })
    })

    .get('/projects/:_id', function (req, res) {
        Project.getProjectById(req.params._id, function (err, project) {
            if (err) {
                throw err;
            }
            res.json(project);
        })
    })

    .post('/projects', function (req, res) {
        const project = req.body;
        Project.addProject(project, function (err, project) {
            if (err) {
                throw err;
            }
            res.json(project);
        })
    })

    .put('/projects/:_id', function (req, res) {
        const id = req.params._id;
        const project = req.body;
        Project.updateProject(id, project, {}, function (err, project) {
            if (err) {
                throw err;
            }
            res.json(project);
        })
    })

    .delete('/projects/:_id', function (req, res) {
        const id = req.params._id;
        Project.deleteProject(id, function (err, project) {
            if (err) {
                throw err;
            }
            res.json(project);
        })
    })

    //TEAMS
    .get('/teams', function (req, res) {
        Team.getTeams(function (err, teams) {
            if (err) {
                throw err;
            }
            res.json(teams);
        })
    })

    .get('/teams/:_id', function (req, res) {
        Team.getTeamById(req.params._id, function (err, team) {
            if (err) {
                throw err;
            }
            res.json(team);
        })
    })

    .post('/teams', function (req, res) {
        const team = req.body;
        Team.addTeam(team, function (err, team) {
            if (err) {
                throw err;
            }
            res.json(team);
        })
    })

    .put('/teams/:_id', function (req, res) {
        const id = req.params._id;
        const team = req.body;
        Team.updateTeam(id, team, {}, function (err, team) {
            if (err) {
                throw err;
            }
            res.json(team);
        })
    })

    .delete('/teams/:_id', function (req, res) {
        const id = req.params._id;
        Team.deleteTeam(id, function (err, team) {
            if (err) {
                throw err;
            }
            res.json(team);
        })
    })

    //MODELS
    .get('/models', function (req, res) {
        Model.getModels(function (err, models) {
            if (err) {
                throw err;
            }
            res.json(models);
        })
    })

    .get('/models/:_id', function (req, res) {
        Model.getModelById(req.params._id, function (err, model) {
            if (err) {
                throw err;
            }
            res.json(model);
        })
    })

    .post('/models', function (req, res) {
        const model = req.body;
        Model.addModel(model, function (err, model) {
            if (err) {
                throw err;
            }
            res.json(model);
        })
    })

    .put('/models/:_id', function (req, res) {
        const id = req.params._id;
        const model = req.body;
        Model.updateModel(id, model, {}, function (err, model) {
            if (err) {
                throw err;
            }
            res.json(model);
        })
    })

    .delete('/models/:_id', function (req, res) {
        const id = req.params._id;
        Model.deleteModel(id, function (err, model) {
            if (err) {
                throw err;
            }
            res.json(model);
        })
    })

    //TRENDS
    .get('/trends', function (req, res) {
        Trend.getTrends(function (err, trends) {
            if (err) {
                throw err;
            }
            res.json(trends);
        })
    })

    .get('/trends/:_id', function (req, res) {
        Trend.getTrendById(req.params._id, function (err, trend) {
            if (err) {
                throw err;
            }
            res.json(trend);
        })
    })

    .post('/trends', function (req, res) {
        const trend = req.body;
        Trend.addTrend(trend, function (err, trend) {
            if (err) {
                throw err;
            }
            res.json(trend);
        })
    })

    .put('/trends/:_id', function (req, res) {
        const id = req.params._id;
        const trend = req.body;
        Trend.updateTrend(id, trend, {}, function (err, trend) {
            if (err) {
                throw err;
            }
            res.json(trend);
        })
    })

    .delete('/trends/:_id', function (req, res) {
        const id = req.params._id;
        Trend.deleteTrend(id, function (err, trend) {
            if (err) {
                throw err;
            }
            res.json(trend);
        })
    })

    //SURFACES
    .get('/surfaces', function (req, res) {
        Surface.getSurfaces(function (err, surfaces) {
            if (err) {
                throw err;
            }
            res.json(surfaces);
        })
    })

    .get('/surfaces/:_id', function (req, res) {
        Surface.getSurfaceById(req.params._id, function (err, surface) {
            if (err) {
                throw err;
            }
            res.json(surface);
        })
    })

    .post('/surfaces', function (req, res) {
        const surface = req.body;
        Surface.addSurface(surface, function (err, surface) {
            if (err) {
                throw err;
            }
            res.json(surface);
        })
    })

    .put('/surfaces/:_id', function (req, res) {
        const id = req.params._id;
        const surface = req.body;
        Surface.updateSurface(id, surface, {}, function (err, surface) {
            if (err) {
                throw err;
            }
            res.json(surface);
        })
    })

    .delete('/surfaces/:_id', function (req, res) {
        const id = req.params._id;
        Surface.deleteSurface(id, function (err, surface) {
            if (err) {
                throw err;
            }
            res.json(surface);
        })
    })

    //MATERIALS
    .get('/materials', function (req, res) {
        Material.getMaterials(function (err, materials) {
            if (err) {
                throw err;
            }
            res.json(materials);
        })
    })

    .get('/materials/:_id', function (req, res) {
        Material.getMaterialById(req.params._id, function (err, material) {
            if (err) {
                throw err;
            }
            res.json(material);
        })
    })

    .post('/materials', function (req, res) {
        const material = req.body;
        Material.addMaterial(material, function (err, material) {
            if (err) {
                throw err;
            }
            res.json(material);
        })
    })

    .put('/materials/:_id', function (req, res) {
        const id = req.params._id;
        const material = req.body;
        Material.updateMaterial(id, material, {}, function (err, material) {
            if (err) {
                throw err;
            }
            res.json(material);
        })
    })

    .delete('/materials/:_id', function (req, res) {
        const id = req.params._id;
        Material.deleteMaterial(id, function (err, material) {
            if (err) {
                throw err;
            }
            res.json(material);
        })
    })

    //SCENE
    .get('/scenes', function (req, res) {
        Scene.getScenes(function (err, scenes) {
            if (err) {
                throw err;
            }
            res.json(scenes);
        })
    })

    .get('/scenes/:_id', function (req, res) {
        Scene.getSceneById(req.params._id, function (err, scene) {
            if (err) {
                throw err;
            }
            res.json(scene);
        })
    })

    .post('/scenes', function (req, res) {
        const scene = req.body;
        Scene.addScene(scene, function (err, scene) {
            if (err) {
                throw err;
            }
            res.json(scene);
        })
    })

    .put('/scenes/:_id', function (req, res) {
        const id = req.params._id;
        const scene = req.body;
        Scene.updateScene(id, scene, {}, function (err, scene) {
            if (err) {
                throw err;
            }
            res.json(scene);
        })
    })

    .delete('/scenes/:_id', function (req, res) {
        const id = req.params._id;
        Scene.deleteScene(id, function (err, scene) {
            if (err) {
                throw err;
            }
            res.json(scene);
        })
    })

    //ENVIRONMENT
    .get('/environments', function (req, res) {
        Environment.getEnvironments(function (err, environments) {
            if (err) {
                throw err;
            }
            res.json(environments);
        })
    })

    .get('/environments/:_id', function (req, res) {
        Environment.getEnvironmentById(req.params._id, function (err, environment) {
            if (err) {
                throw err;
            }
            res.json(environment);
        })
    })

    .post('/environments', function (req, res) {
        const environment = req.body;
        Environment.addEnvironment(environment, function (err, environment) {
            if (err) {
                throw err;
            }
            res.json(environment);
        })
    })

    .put('/environments/:_id', function (req, res) {
        const id = req.params._id;
        const environment = req.body;
        Environment.updateEnvironment(id, environment, {}, function (err, environment) {
            if (err) {
                throw err;
            }
            res.json(environment);
        })
    })

    .delete('/environments/:_id', function (req, res) {
        const id = req.params._id;
        Environment.deleteEnvironment(id, function (err, environment) {
            if (err) {
                throw err;
            }
            res.json(environment);
        })
    });

module.exports = router;