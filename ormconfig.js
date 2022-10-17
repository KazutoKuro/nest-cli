module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'kuro',
  password: 'pass123',
  database: 'learning',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationDir: 'src/migrations',
  },
};
