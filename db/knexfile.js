// cfenv gives us easy access to Cloud Foundry environment variables
const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();
const srcCredentials = appEnv.getServiceCreds('etl_src');
const dstCredentials = appEnv.getServiceCreds('etl_dst');

module.exports = {

  development: {
    etl_src: {
      client: 'postgresql',
      connection: {
        database: 'etl_src',
        host: 'localhost'
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },
    etl_dst: {
      client: 'postgresql',
      connection: {
        database: 'etl_dst',
        host: 'localhost'
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  },

  production: {
    etl_src: {
      client: 'mysql',
      connection: srcCredentials ? srcCredentials.uri : null,
      migrations: {
        tableName: 'knex_migrations'
      }
    },
    etl_dst: {
      client: 'mysql',
      connection: dstCredentials ? dstCredentials.uri : null,
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  }
};
