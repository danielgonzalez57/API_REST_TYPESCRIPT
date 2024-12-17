import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"
import { getDepartament } from "../services/departament.services";

// GET *
const getItems = async (req:Request, res:Response) =>{
    try {
        const responseitems = await getDepartament();
        res.send(responseitems);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS', error);
    }
}

export {getItems};