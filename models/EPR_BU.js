const Bookshelf = require('../bookshelf');

const epr_bu = Bookshelf.Model.extend({
  tableName: 'epr_bu',
  hasTimestamps: false
});

module.exports = Bookshelf.model('EPR_BU', epr_bu);
