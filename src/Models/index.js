'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const process = require('process')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'

const config = require(__dirname + '/../config/config.js')[env]
const db = {}

let sequelize
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
  )
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
    )
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize


db.nft = require('./neft.model.ts')(sequelize,DataTypes)
db.user = require('./user.model.ts')(sequelize,DataTypes)
db.collection = require('./collection.model.ts')(sequelize,DataTypes)

db.user.hasOne(db.nft,{
  foreingKey: 'create_id',
  as: 'nft'
})

db.nft.belongsTo(db.user,{
  foreingKey: 'create_id',
  as: 'user'
})

db.user.hasOne(db.nft,{
  foreingKey: 'owner_id',
  as: 'nft'
})

db.nft.belongsTo(db.user,{
  foreingKey: 'owner_id',
  as: 'user'
})
db.nft.hasMany(db.collection,{
  foreingKey: 'nft_id',
  as: 'collection'
})

db.collection.belongsTo(db.nft,{
  foreingKey: 'nft_id',
  as: 'nft'
})


module.exports = db
