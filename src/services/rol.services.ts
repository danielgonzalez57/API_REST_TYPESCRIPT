import { sequelize } from '../config/connection';
import { Rol } from "../interfaces/rol.interface";

// SELECT DB
const getRol = async () => {
    const responseGet = await sequelize.models.modelRol.findAll(); 
    return responseGet;
}

// FILTER DB
const getRoles = async (id:string) => {
    const responseGet = await sequelize.models.modelRol.findOne({
        where: {
            Id: id
        }
    }); 
    return responseGet;
}

// REGISTER
const postRol = async ({Name, Id_Permissions}: Omit<Rol, 'Id'>) => {

    // Chequea si hay un rol igual
    const isCheck = await sequelize.models.modelRol.findOne({where:{Name: Name}});
    if(isCheck) return "ALREADY_ROL";

    // Regista el rol
    const postNewRol = await sequelize.models.modelRol.create({Name, Id_Permissions});
    return postNewRol;
};

// DELETE DB
const deleteRol = async (id:string) => {
    const responseDelete = await sequelize.models.modelRol.destroy({
        where: {
            Id: id
        }
    });
    return responseDelete;
}

export { getRol, postRol, deleteRol, getRoles };