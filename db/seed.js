console.log('Seeding ' + process.env.DB + ' on ' + process.env.NODE_ENV);

const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV][process.env.DB]);
knex.seed.run().then( () => {
  console.log('  seed complete.');
  knex.destroy();
});
