const path = require('path')

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DB_URL || 'postgres://localhost/for-them'
  },
  migrations: {
    directory: path.join(__dirname, 'db', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'db', 'seeds')
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'for-them',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migration: {
      tableName: 'knex_migrations'
    }
  }
};
