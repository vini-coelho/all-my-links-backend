module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [
    'src/app/models/**/*.ts',
  ],
  migrations: [
    'src/database/migrations/**/*.ts',
  ],
  subscribers: [
    'src/subscriber/**/*.ts',
  ],
  cli: {
    entitiesDir: 'src/app/models',
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'src/subscriber',
  },
  migrationsRun: true
};
