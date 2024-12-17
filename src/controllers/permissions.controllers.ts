import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"
import { getPermissions } from "../services/permissions.services";

// GET *
const getItems = async (req:Request, res:Response) =>{
    try {
        const responseitems = await getPermissions();
        res.send(responseitems);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS', error);
    }
}


export {getItems};