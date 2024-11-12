import { User } from '../interfaces/user.interface';
import { sequelize } from '../config/connection';

// INSERT DB
const insertUser = async (userNew: Omit<User, 'ID_User'>) => {
    const responsePost = await sequelize.models.modelUser.create(userNew);
    return responsePost;
}

// FILTER * DB
const getUsers = async () => {
    const responseGets = await sequelize.models.modelUser.findAll();
    return responseGets;
}

// FILTER DB
const getUser = async (id:string) => {
    const responseGet = await sequelize.models.modelUser.findOne({
        where: {
            ID_User: id
        }
    }); 
    return responseGet;
}
// UPDATE DB
const UpdateUser = async (id: string, userNew: User) => {
    const responseUpdate = await sequelize.models.modelUser.update(userNew, {
        where: {
            ID_User: id
        }
    });
    return responseUpdate;
}

// DELETE DB
const DeleteUser = async (id:string) => {
    console.log(id)
    const responseDelete = await sequelize.models.modelUser.destroy({
        where: {
            ID_User: id
        }
    });
    return responseDelete;
}

export { insertUser, getUsers, getUser, UpdateUser, DeleteUser }