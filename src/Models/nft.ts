import { DataTypes } from "sequelize";
import sequelize from "../Conections";
import { Users } from '../Models/users'
export const Nfts = sequelize.define("nfts", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  create_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: { 
      model: 'users', 
      key: 'id',
    } 
  },
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: { 
      model: 'users', 
      key: 'id' 
    },
  },
});
  
  
  
  
  
  
