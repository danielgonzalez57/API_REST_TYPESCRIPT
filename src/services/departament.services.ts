import { sequelize } from '../config/connection';

// SELECT DB
const getDepartament = async () => {
    const responseGet = await sequelize.models.modelDepartaments.findAll(); 
    return responseGet;
}

export { getDepartament };