module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DB_URL || 'postgres://localhost/for-them'
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
