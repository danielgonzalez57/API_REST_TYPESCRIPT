import { Sequelize } from 'sequelize';
import { masterUserSchema, MasterUser } from './user';

function setupModels(sequelize: Sequelize): void {
    MasterUser.init(masterUserSchema, MasterUser.config(sequelize));
}
 
export default setupModels;
