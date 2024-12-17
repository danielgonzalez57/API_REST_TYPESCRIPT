import { Sequelize, Model, DataTypes, ModelAttributes } from 'sequelize';
import { Rol } from '../interfaces/rol.interface';

const tableName = "MASTER_ROL";
const modelName = "modelRol";

// CAMBIAR
const masterRolSchema: ModelAttributes<MasterRol, Rol> = {
  Id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  Name: {
    allowNull: false,
    type: DataTypes.STRING(70),
  },
  Id_Permissions: {
    allowNull: false,
    type: DataTypes.STRING(70),
  }
};

class MasterRol extends Model<Rol> implements Rol {
  public Id!: number;
  public Name!: string;
  public Id_Permissions!: string;
  
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
  masterRolSchema,
  MasterRol,
};
