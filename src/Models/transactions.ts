import { DataTypes } from 'sequelize'
import sequelize from '../Conections'

export const Collection = sequelize.define('transactions', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nft_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  buyer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  seller_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  bidder_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
})
