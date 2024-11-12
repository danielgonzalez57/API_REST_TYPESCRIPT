import "dotenv/config";
import { Sequelize } from 'sequelize';
import setupModels from '../models/index';

const sequelize = new Sequelize(
    process.env.BD_NOMBRE as string,
    process.env.DB_USER as string,
    process.env.BD_PASSWORD as string,
    {
        host: process.env.DB_HOST as string,
        dialect: 'mssql',
        timezone: '-04:00',
        dialectOptions: {
            options: {
                encrypt: false,
            }
        }
    }
);

setupModels(sequelize);
// sequelize.sync();

export {sequelize};
// PRUEBA DE CONEXION
//   ejecuta npx nodemon src/config/connection.ts
//   async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection Establecida correctamente.');
//     } catch (error) {
//         console.error('Todo Mal', error);
//     }
//   }
//   testConnection();