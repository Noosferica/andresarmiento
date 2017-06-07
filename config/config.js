'use strict'

const config = {
  sessionSecret: 'belleza',

  development: {
    PORT: 3000,
    MONGODB_URI: 'mongodb://localhost:27017/AndresDB'
  },
  production: {
    PORT: 3003,
    MONGODB_URI: 'mongodb://geoUser:cibsolar1609@localhost/GeoDB'
  }
}

module.exports = config;