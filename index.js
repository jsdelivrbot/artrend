const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds263172.mlab.com:63172/heroku_376zbtqs')
const db = mongoose.connection

app
  .use(express.static(path.join(__dirname, 'public')))

  .get('/', function(req, res){
      res.send('Hello, Ruben')
})

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
