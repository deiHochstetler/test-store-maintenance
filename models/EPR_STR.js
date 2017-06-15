const Bookshelf = require('../bookshelf');

const epr_str = Bookshelf.Model.extend({
  tableName: 'epr_str',
  hasTimestamps: false
});

module.exports = Bookshelf.model('EPR_STR', epr_str);
