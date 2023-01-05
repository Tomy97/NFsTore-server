import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize'
import sequelize from '../Conections'

export class Users extends Model<
  InferAttributes<any>,
  InferCreationAttributes<any>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare user: string
  declare email: string
  declare password: string
  declare avatar: string
  declare permissions: string
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING,
      defaultValue: 'https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg',
      allowNull: false,
    },
    permissions: {
      type: DataTypes.STRING,
      defaultValue: 'user',
      allowNull: true,
    },
  },
  {
    tableName: 'users',
    sequelize,
  },
)
