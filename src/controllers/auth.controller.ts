import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"
import { registerNewUser, loginUser } from "../services/auth.services";


const registerCtrl = async ({body}: Request, res: Response) => {
    try {
        const responseUser = await registerNewUser(body);
        res.send(responseUser);

    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error);
    }
};  

const loginCtrl = async ({body}: Request, res: Response) => {
    try {
        const {Email, Password} = body
        const responseUser = await loginUser({Email, Password});

        if(responseUser === "PASSWORD_INCORRECT"){
            res.status(403);
            res.send('Error en la contraseña');
        }
        else if(responseUser === "NOT_FOUND_USER"){
            res.status(403);
            res.send('El usuario no existe');

        }else{
            res.send(responseUser);
        }

    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error);

    }
};

export { loginCtrl, registerCtrl };