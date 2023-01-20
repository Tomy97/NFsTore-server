import { Users } from "./users";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes
} from "sequelize";
import sequelize from "../Conections";

export class Balance extends Model<
  InferAttributes<any>,
  InferCreationAttributes<any>
> {
  declare user_id: number;
  declare monto: number;
}

Balance.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id"
      }
    },
    monto: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: "balance",
    sequelize
  }
);

Balance.hasOne(Users, { foreignKey: "userId" });
