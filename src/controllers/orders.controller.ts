import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"
import { registerNewUser, loginUser } from "../services/auth.services";


const getItems = async (req: Request, res: Response) => {
    try {
        // const responseitems = await getUsers();
        res.send(
            {
                data: 'Esto solo lo ven los admin'
            }
        );
    } catch (error) { 
        handleHttp(res, 'ERROR_GET_ITEM', error);
    }
};  

export {  getItems };