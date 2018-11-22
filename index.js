const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

User = require('./models/user')

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds263172.mlab.com:63172/heroku_376zbtqs')
const db = mongoose.connection

app
    .use(express.static(path.join(__dirname, 'public')))

    .get('/', function(req, res){
        res.send("/api/users<br/>" +
            "/api/projects\n<br/>" +
            "/api/models\n<br/>" +
            "/api/surfaces\n<br/>" +
            "/api/trends\n<br/>" +
            "/api/textures\n<br/>" +
            "/api/scenes\n<br/>" +
            "/api/environments\n<br/>" +
            "/api/lightSetups")
    })

    .get('/api/users', function (req, res) {
        User.getUsers(function (err, users) {
            if (err) {
                throw  err;
            }
            res.json(users)
        })
    })

    .post('/api/users', function (req, res) {
        const user = req.body
        User.addUser(user, function (err, user) {
            if (err) {
                throw  err;
            }
            res.json(user)
        })
    })

    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
