const knex = require('knex')(require('./db/knexfile')[process.env.NODE_ENV]);
const bookshelf = require('bookshelf')(knex);
bookshelf.plugin('registry');

module.exports = bookshelf;
