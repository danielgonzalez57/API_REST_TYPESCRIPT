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

const loginCtrl = async (req: Request, res: Response) => {
    try {
        // const responseUser = await registerNewUser(body);
        // res.send(responseUser);
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error);
    }
};

export { loginCtrl, registerCtrl };