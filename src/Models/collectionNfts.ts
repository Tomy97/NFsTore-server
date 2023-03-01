import { DataTypes } from "sequelize";
import sequelize from "../Conections";
import { Collections } from "./collection";
import { Nfts } from "./nft";


export const CollectionNfts = sequelize.define("collectionNfts", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nft_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: Nfts,
      key: "id",
    },
  },
  collection_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    references: {
      model: Collections,
      key: "id",
    },
  },
});
