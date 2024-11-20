import { Sequelize, Model, DataTypes, ModelAttributes } from 'sequelize';
import { User } from '../interfaces/user.interface';

const tableName = "MASTER_USER";
const modelName = "modelUser";

// CAMBIAR
const masterUserSchema: ModelAttributes<MasterUser, User> = {
  ID_User: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  Nombre: {
    allowNull: false,
    type: DataTypes.STRING(70),
  },
  Email: {
    allowNull: false,
    type: DataTypes.STRING(70),
  },
  Departament: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  Password: {
    allowNull: false,
    type: DataTypes.STRING(100),
  },
  ID_Rol: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class MasterUser extends Model<User> implements User {
  public ID_User!: number;
  public Nombre!: string;
  public Email!: string;
  public Departament!: string;
  public Password!: string;
  public ID_Rol!: number;
  
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
  masterUserSchema,
  MasterUser,
};
