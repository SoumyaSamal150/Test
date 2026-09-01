const settings = {
  port: process.env.PORT || 3000,
  host: process.env.HOST || 'localhost',
  env: process.env.NODE_ENV || 'development',
  apiVersion: 'v1',
  maxRetries: 3,
  timeout: 5000,
};

module.exports = settings;
