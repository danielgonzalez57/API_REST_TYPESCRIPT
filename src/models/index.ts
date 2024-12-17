import { Sequelize } from 'sequelize';
import { masterUserSchema, MasterUser } from './user.model';
import { masterRolSchema, MasterRol } from './rol.model';
import { masterPermissionsSchema, MasterPermissions } from './permissions.model';
import { masterDepartamentSchema, MasterDepartament } from './departament.model';

function setupModels(sequelize: Sequelize): void {
    MasterUser.init(masterUserSchema, MasterUser.config(sequelize));
    MasterRol.init(masterRolSchema, MasterRol.config(sequelize));
    MasterPermissions.init(masterPermissionsSchema, MasterPermissions.config(sequelize));
    MasterDepartament.init(masterDepartamentSchema, MasterDepartament.config(sequelize));
}
 
export default setupModels;
