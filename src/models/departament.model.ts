import { Sequelize, Model, DataTypes, ModelAttributes } from 'sequelize';
import { Departaments } from '../interfaces/departament.interface';

const tableName = "MASTER_DEPARTAMENTS";
const modelName = "modelDepartaments";

// CAMBIAR
const masterDepartamentSchema: ModelAttributes<MasterDepartament, Departaments> = {
  Id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER, 
  },
  Name: {
    allowNull: false,
    type: DataTypes.STRING(70),
  },
};

class MasterDepartament extends Model<Departaments> implements Departaments {
  public Id!: number;
  public Name!: string;
  
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
  masterDepartamentSchema,
  MasterDepartament,
};
