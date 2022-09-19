import {Sequelize} from "sequelize";

const sequelize = new Sequelize('nftstore', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
    logging: false,
    define: {
        timestamps: false
    }
})
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database:', err);
    });

export default sequelize;

