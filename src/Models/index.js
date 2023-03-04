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


db.nfts = require('./neft.model.ts')(sequelize,DataTypes)
db.users = require('./user.model.ts')(sequelize,DataTypes)
db.collections = require('./collection.model.ts')(sequelize,DataTypes)
db.collectionNfts = require('./collectionNfts.model.ts')(sequelize,DataTypes)

db.users.hasMany(db.nfts,{
  foreingKey: 'create_id',
})

db.nfts.belongsTo(db.users,{
  foreingKey: 'create_id',
  as: 'create'
})

db.users.hasMany(db.nfts,{
  foreingKey: 'owner_id',
})

db.nfts.belongsTo(db.users,{
  foreingKey: 'owner_id',
  as: 'owner',
})
db.nfts.belongsToMany(db.collections,{
  through: collectionNfts, 
  foreingKey: 'nft_id',
  as: 'collections'
})

db.collections.belongsToMany(db.nfts,{
  through: collectionNfts, 
  foreingKey: 'nft_id',
  as: 'nfts'
})


module.exports = db
