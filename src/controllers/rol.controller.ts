import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"
import { getRol, postRol, deleteRol, getRoles } from "../services/rol.services";

// GET *
const getItems = async (req:Request, res:Response) =>{
    try {
        const responseitems = await getRol();
        res.send(responseitems);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS', error);
    }
}

// GET
const getItem = async ({ params }:Request, res:Response) =>{
    try {
        const { id } = params;
        const responseitems = await getRoles(id);
        res.send(responseitems);

    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM', error);

    }
}

// POST
const PostItem = async ({ body }:Request, res:Response) => {
    try {
        const responsePost = await postRol(body);
        res.send(responsePost);
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error);
    }
}

// DELETE
const DeleteItem = async({ params }:Request, res:Response) => {
    try {
        const { id } = params;
        const responseDelete = await deleteRol(id);
        res.json('USER_DELETE');
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM', error);
    }
}


export {getItems, PostItem, DeleteItem, getItem};