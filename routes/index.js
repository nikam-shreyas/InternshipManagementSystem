const express = require('express');
const MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID; // we will use this later
const bodyParser= require('body-parser')
const app = express();
var dbURL = require('./properties').DB;
var properties = require('./config/properties');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(dbURL, (err, db) => {
  var dbase = db.db("InternshipManagement");
  if (err) return console.log(err)
  app.listen(properties.PORT, () => {
    console.log('app working on ${properties.PORT}')
  })
})
