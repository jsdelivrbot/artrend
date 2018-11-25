const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

//MODELS
User = require('./models/user');
Project = require('./models/project');
Team = require('./models/team');
Model = require('./models/model');
Surface = require('./models/surface');
Material = require('./models/material');
Scene = require('./models/scene');
Environment = require('./models/environment');
Trend = require('./models/trend');

// Mongoose Connect
mongoose.connect('mongodb://localhost/artrend', { useNewUrlParser: true, useFindAndModify: false });
const db = mongoose.connection;

app
    .get('/', function(req, res){
        res.send("/api/users<br/>" +
            "/api/projects\n<br/>" +
            "/api/teams\n<br/>" +
            "/api/models\n<br/>" +
            "/api/surfaces\n<br/>" +
            "/api/trends\n<br/>" +
            "/api/textures\n<br/>" +
            "/api/scenes\n<br/>" +
            "/api/environments\n<br/>" +
            "/api/lightSetups");
    })

    //USERS
    .get('/api/users', function (req, res) {
        User.getUsers(function (err, users) {
            if (err) {
                throw err;
            }
            res.json(users);
        })
    })

    .get('/api/users/:_id', function (req, res) {
        User.getUserById(req.params._id, function (err, user) {
            if (err) {
                throw err;
            }
            res.json(user);
        })
    })

    .post('/api/users', function (req, res) {
        const user = req.body;
        User.addUser(user, function (err, user) {
            if (err) {
                throw err;
            }
            res.json(user);
        })
    })

    .put('/api/users/:_id', function (req, res) {
        const id = req.params._id;
        const user = req.body;
        User.updateUser(id, user, {}, function (err, user) {
            if (err) {
                throw err;
            }
            res.json(user);
        })
    })

    .delete('/api/users/:_id', function (req, res) {
        const id = req.params._id;
        User.deleteUser(id, function (err, user) {
            if (err) {
                throw err;
            }
            res.json(user);
        })
    })

    //PROJECTS
    .get('/api/projects', function (req, res) {
        Project.getProjects(function (err, projects) {
            if (err) {
                throw err;
            }
            res.json(projects);
        })
    })

    .get('/api/projects/:_id', function (req, res) {
        Project.getProjectById(req.params._id, function (err, project) {
            if (err) {
                throw err;
            }
            res.json(project);
        })
    })

    .post('/api/projects', function (req, res) {
        const project = req.body;
        Project.addProject(project, function (err, project) {
            if (err) {
                throw err;
            }
            res.json(project);
        })
    })

    .put('/api/projects/:_id', function (req, res) {
        const id = req.params._id;
        const project = req.body;
        Project.updateProject(id, project, {}, function (err, project) {
            if (err) {
                throw err;
            }
            res.json(project);
        })
    })

    .delete('/api/projects/:_id', function (req, res) {
        const id = req.params._id;
        Project.deleteProject(id, function (err, project) {
            if (err) {
                throw err;
            }
            res.json(project);
        })
    })

    //TEAMS
    .get('/api/teams', function (req, res) {
        Team.getTeams(function (err, teams) {
            if (err) {
                throw err;
            }
            res.json(teams);
        })
    })

    .get('/api/teams/:_id', function (req, res) {
        Team.getTeamById(req.params._id, function (err, team) {
            if (err) {
                throw err;
            }
            res.json(team);
        })
    })

    .post('/api/teams', function (req, res) {
        const team = req.body;
        Team.addTeam(team, function (err, team) {
            if (err) {
                throw err;
            }
            res.json(team);
        })
    })

    .put('/api/teams/:_id', function (req, res) {
        const id = req.params._id;
        const team = req.body;
        Team.updateTeam(id, team, {}, function (err, team) {
            if (err) {
                throw err;
            }
            res.json(team);
        })
    })

    .delete('/api/teams/:_id', function (req, res) {
        const id = req.params._id;
        Team.deleteTeam(id, function (err, team) {
            if (err) {
                throw err;
            }
            res.json(team);
        })
    })

    //MODELS
    .get('/api/models', function (req, res) {
        Model.getModels(function (err, models) {
            if (err) {
                throw err;
            }
            res.json(models);
        })
    })

    .get('/api/models/:_id', function (req, res) {
        Model.getModelById(req.params._id, function (err, model) {
            if (err) {
                throw err;
            }
            res.json(model);
        })
    })

    .post('/api/models', function (req, res) {
        const model = req.body;
        Model.addModel(model, function (err, model) {
            if (err) {
                throw err;
            }
            res.json(model);
        })
    })

    .put('/api/models/:_id', function (req, res) {
        const id = req.params._id;
        const model = req.body;
        Model.updateModel(id, model, {}, function (err, model) {
            if (err) {
                throw err;
            }
            res.json(model);
        })
    })

    .delete('/api/models/:_id', function (req, res) {
        const id = req.params._id;
        Model.deleteModel(id, function (err, model) {
            if (err) {
                throw err;
            }
            res.json(model);
        })
    })

    //TRENDS
    .get('/api/trends', function (req, res) {
        Trend.getTrends(function (err, trends) {
            if (err) {
                throw err;
            }
            res.json(trends);
        })
    })

    .get('/api/trends/:_id', function (req, res) {
        Trend.getTrendById(req.params._id, function (err, trend) {
            if (err) {
                throw err;
            }
            res.json(trend);
        })
    })

    .post('/api/trends', function (req, res) {
        const trend = req.body;
        Trend.addTrend(trend, function (err, trend) {
            if (err) {
                throw err;
            }
            res.json(trend);
        })
    })

    .put('/api/trends/:_id', function (req, res) {
        const id = req.params._id;
        const trend = req.body;
        Trend.updateTrend(id, trend, {}, function (err, trend) {
            if (err) {
                throw err;
            }
            res.json(trend);
        })
    })

    .delete('/api/trends/:_id', function (req, res) {
        const id = req.params._id;
        Trend.deleteTrend(id, function (err, trend) {
            if (err) {
                throw err;
            }
            res.json(trend);
        })
    })

    //SURFACES
    .get('/api/surfaces', function (req, res) {
        Surface.getSurfaces(function (err, surfaces) {
            if (err) {
                throw err;
            }
            res.json(surfaces);
        })
    })

    .get('/api/surfaces/:_id', function (req, res) {
        Surface.getSurfaceById(req.params._id, function (err, surface) {
            if (err) {
                throw err;
            }
            res.json(surface);
        })
    })

    .post('/api/surfaces', function (req, res) {
        const surface = req.body;
        Surface.addSurface(surface, function (err, surface) {
            if (err) {
                throw err;
            }
            res.json(surface);
        })
    })

    .put('/api/surfaces/:_id', function (req, res) {
        const id = req.params._id;
        const surface = req.body;
        Surface.updateSurface(id, surface, {}, function (err, surface) {
            if (err) {
                throw err;
            }
            res.json(surface);
        })
    })

    .delete('/api/surfaces/:_id', function (req, res) {
        const id = req.params._id;
        Surface.deleteSurface(id, function (err, surface) {
            if (err) {
                throw err;
            }
            res.json(surface);
        })
    })

    //MATERIALS
    .get('/api/materials', function (req, res) {
        Material.getMaterials(function (err, materials) {
            if (err) {
                throw err;
            }
            res.json(materials);
        })
    })

    .get('/api/materials/:_id', function (req, res) {
        Material.getMaterialById(req.params._id, function (err, material) {
            if (err) {
                throw err;
            }
            res.json(material);
        })
    })

    .post('/api/materials', function (req, res) {
        const material = req.body;
        Material.addMaterial(material, function (err, material) {
            if (err) {
                throw err;
            }
            res.json(material);
        })
    })

    .put('/api/materials/:_id', function (req, res) {
        const id = req.params._id;
        const material = req.body;
        Material.updateMaterial(id, material, {}, function (err, material) {
            if (err) {
                throw err;
            }
            res.json(material);
        })
    })

    .delete('/api/materials/:_id', function (req, res) {
        const id = req.params._id;
        Material.deleteMaterial(id, function (err, material) {
            if (err) {
                throw err;
            }
            res.json(material);
        })
    })

    //SCENE
    .get('/api/scenes', function (req, res) {
        Scene.getScenes(function (err, scenes) {
            if (err) {
                throw err;
            }
            res.json(scenes);
        })
    })

    .get('/api/scenes/:_id', function (req, res) {
        Scene.getSceneById(req.params._id, function (err, scene) {
            if (err) {
                throw err;
            }
            res.json(scene);
        })
    })

    .post('/api/scenes', function (req, res) {
        const scene = req.body;
        Scene.addScene(scene, function (err, scene) {
            if (err) {
                throw err;
            }
            res.json(scene);
        })
    })

    .put('/api/scenes/:_id', function (req, res) {
        const id = req.params._id;
        const scene = req.body;
        Scene.updateScene(id, scene, {}, function (err, scene) {
            if (err) {
                throw err;
            }
            res.json(scene);
        })
    })

    .delete('/api/scenes/:_id', function (req, res) {
        const id = req.params._id;
        Scene.deleteScene(id, function (err, scene) {
            if (err) {
                throw err;
            }
            res.json(scene);
        })
    })

    //ENVIRONMENT
    .get('/api/environments', function (req, res) {
        Environment.getEnvironments(function (err, environments) {
            if (err) {
                throw err;
            }
            res.json(environments);
        })
    })

    .get('/api/users/:_id', function (req, res) {
        Environment.getEnvironmentById(req.params._id, function (err, environment) {
            if (err) {
                throw err;
            }
            res.json(environment);
        })
    })

    .post('/api/users', function (req, res) {
        const environment = req.body;
        Environment.addEnvironment(environment, function (err, environment) {
            if (err) {
                throw err;
            }
            res.json(environment);
        })
    })

    .put('/api/users/:_id', function (req, res) {
        const id = req.params._id;
        const environment = req.body;
        Environment.updateEnvironment(id, environment, {}, function (err, environment) {
            if (err) {
                throw err;
            }
            res.json(environment);
        })
    })

    .delete('/api/users/:_id', function (req, res) {
        const id = req.params._id;
        Environment.deleteEnvironment(id, function (err, environment) {
            if (err) {
                throw err;
            }
            res.json(environment);
        })
    })


    .listen(PORT, () => console.log(`Listening on ${ PORT }`));
