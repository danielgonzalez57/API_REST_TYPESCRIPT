import { Sequelize, Model, DataTypes, ModelAttributes } from 'sequelize';
import { Permissions } from '../interfaces/permissions.interfaces';

const tableName = "MASTER_PERMISSIONS";
const modelName = "modelPermissions";

// CAMBIAR
const masterPermissionsSchema: ModelAttributes<MasterPermissions, Permissions> = {
  Id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER, 
  },
  Name: {
    allowNull: false,
    type: DataTypes.STRING(70),
  },
  Description: {
    allowNull: false,
    type: DataTypes.STRING(70),
  }
};

class MasterPermissions extends Model<Permissions> implements Permissions {
  public Id!: number;
  public Name!: string;
  public Description!: string;
  
  static associate() {
    // associate
  }  

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: tableName,
      modelName: modelName,
      createdAt: "Create_date",
      updatedAt: "Update_date"
    };    
  }
}

export {
  tableName,
  masterPermissionsSchema,
  MasterPermissions,
};
