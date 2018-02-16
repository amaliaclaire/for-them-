const path = require('path')

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL || 'postgres://localhost/for-them'
  },
  migrations: {
    directory: path.join(__dirname, 'db', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'db', 'seeds')
  },
  productions: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
  migrations: {
    directory: path.join(__dirname, 'db', 'migrations')
  },
  seeds: {
    directory: path.join(__dirname, 'db', 'seeds')
  }
};
