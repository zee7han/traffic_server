process.on(`uncaughtException`, console.error)


const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 4000

var routes = require('./routes')


var environment = process.env.NODE_ENV || 'development'
var config = require('./config')[environment]

var envUrl = process.env[config.mongodb_url]

var localUrl = `mongodb://${config.mongodb_url}`

var mongoUrl = envUrl ? envUrl : localUrl

mongoose.connect(mongoUrl, {
  useNewUrlParser: true
}, function(err, db) {
  if (err) {
    console.log("Get DB Connection Error", err);
  } else {
    console.log(`Database Connected on  ${mongoUrl}`);
  }
})

let app = express()

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept Client-Os")
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
});


app.use(routes)
app.listen(PORT, () => console.log(`Application Running ${PORT}`))
