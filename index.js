const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

mongoose.connect()

express()
  .use(express.static(path.join(__dirname, 'public')))

  .get('/', (req, res) => res.render('pages/index'))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
