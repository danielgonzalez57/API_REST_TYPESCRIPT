import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.services";


const registerCtrl = async ({body}: Request, res: Response) => {
    const responseUser = await registerNewUser()
};

const loginCtrl = async (req: Request, res: Response) => {

};

export { loginCtrl, registerCtrl };