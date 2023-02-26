import { DataTypes } from "sequelize";
import sequelize from "../Conections";

export const Nft = sequelize.define("nft", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  link: {
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
      model: 'User', 
      key: 'id' 
    } 
  },
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: { 
      model: 'User', 
      key: 'id' 
  } 
  },
});
