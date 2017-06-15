console.log('Migrating ' + process.env.DB + ' on ' + process.env.NODE_ENV);

const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV][process.env.DB]);
knex.migrate.latest().then( () => {
  console.log('  migration complete.');
  knex.destroy();
});
