import { Auth } from "../interfaces/auth.interface";
import { sequelize } from '../config/connection';
import { User } from "../interfaces/user.interface";
import { encrypt } from "../utils/bcrypt.handle";

// REGISTER
const registerNewUser = async ({Email, Password, Nombre, Departament, ID_Rol}: Omit<User, 'ID_User'>) => {

    // Chequea si hay un usuario con el mismo email
    const isCheck = await sequelize.models.modelUser.findOne({where:{Email: Email}});
    if(isCheck) return "ALREADY_USER";

    // Hashea el password
    const passHash = await encrypt(Password);

    // Regista el usuario con el password hasheado
    const registerNewUser = await sequelize.models.modelUser.create({Email, Password:passHash , Nombre, Departament, ID_Rol});
    return registerNewUser;
};

// LOGIN
const loginUser = async ({Email, Password}: Auth) => {
    const isCheck = await sequelize.models.modelUser.findOne({where:{Email: Email}});
    if(!isCheck) return "NOT_FOUND_USER";

    // const passwordHash = isCheck.Password
};

export { registerNewUser, loginUser };