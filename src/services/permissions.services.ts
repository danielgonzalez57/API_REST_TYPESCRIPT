import { sequelize } from '../config/connection';

// SELECT DB
const getPermissions = async () => {
    const responseGet = await sequelize.models.modelPermissions.findAll(); 
    return responseGet;
}

export { getPermissions };