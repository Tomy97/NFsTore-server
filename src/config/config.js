require('dotenv').config()

module.exports = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'nftstore',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql',
}
