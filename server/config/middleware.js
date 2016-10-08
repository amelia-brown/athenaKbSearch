'use strict'
let mongoose = require('mongoose');
mongoose.Promise = global.Promise; //fixes depreciated mongoose promise by implementing ES6 promise.

module.exports = {
  kbUrls: require('./kbUrls.js'),
  ticketUrls: require('./ticketUrls.js'),
  express: require('express'),
  router: require('express').Router,
  mongoose: mongoose,
  mongodb: require('mongodb'),
  bodyParser: require('body-parser'),
  chalk: require('chalk'),
  request: require('request')//,
  // sequelize: require('sequelize'),
  // pg: require('pg'),
  // dbAuth: require('./dbAuth.js'),
}
