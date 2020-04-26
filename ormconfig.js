module.exports = {
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: 5432,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITIES_PATH],
  migrations: [process.env.TYPEORM_MIGRATIONS_PATH],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};
