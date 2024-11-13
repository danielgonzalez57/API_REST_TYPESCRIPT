import { Sequelize } from 'sequelize';
import { masterUserSchema, MasterUser } from './user.model';

function setupModels(sequelize: Sequelize): void {
    MasterUser.init(masterUserSchema, MasterUser.config(sequelize));
}
 
export default setupModels;
