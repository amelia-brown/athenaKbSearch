const elasticsearch = require('elasticsearch');
const host = process.env.ELASTICSEARCH : 'localhost';
const port = '9200'

const client = new elasticsearch.Client({
  host: `${host}:${port}`,
  log: {
    level: 'trace',
  },
});

module.exports = client;

