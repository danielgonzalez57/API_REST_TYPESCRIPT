import { Auth } from "../interfaces/auth.interface";
import { sequelize } from '../config/connection';
import { User } from "../interfaces/user.interface";
import { encrypt } from "../utils/bcrypt.handle";

// REGISTER
const registerNewUser = async ({Email, Password, Nombre, Departament, ID_Rol}: Omit<User, 'ID_User'>) => {

    const isCheck = await sequelize.models.modelUser.findOne({where:{Email: Email}});
    if(isCheck) return "ALREADY_USER";

    const passHash = await encrypt(Password);

    const registerNewUser = await sequelize.models.modelUser.create({Email, Password:passHash , Nombre, Departament, ID_Rol});
    return registerNewUser;
};

// LOGIN
const loginUser = async () => {

};

export { registerNewUser, loginUser };