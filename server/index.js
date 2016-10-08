'use strict'
const mw = require('./config/middleware.js');
//set port to default port or POST variable provided by user
const port = process.argv[2] || mw.kbUrls.default;

//set server to listen to port

require('./server.js').listen(port, () =>
  console.log(mw.chalk.green.bold(`\nAthena KB Search RESTful API listening on port ${port}.`)));
