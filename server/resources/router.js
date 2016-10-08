'use strict'
const router = require('../config/middleware.js').router();
const api = require('./controller.js');

router.get('/', api.pingEs);

//Articles Routes
router.get('/api/articles/addIndex', api.addIndex);
router.get('/api/articles/findMostRecent', api.findMostRecent);
router.get('/api/articles/delete', api.deleteAllRecords);
router.get('/api/articles/count', api.count);
router.get('/api/articles/search', api.search);
router.get('/api/articles/mapping', api.mapping);

//Tickets Routes
router.get('/api/tickets/addIndex', api.addIndex);
router.get('/api/tickets/findMostRecent', api.findMostRecent);
router.get('/api/tickets/delete', api.deleteAllRecords);
router.get('/api/tickets/count', api.count);
router.get('/api/tickets/search', api.search);
router.get('/api/tickets/mapping', api.mapping);


module.exports = router;
