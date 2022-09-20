import { DataTypes } from 'sequelize';
import sequelize from '../Conections';

export const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
})