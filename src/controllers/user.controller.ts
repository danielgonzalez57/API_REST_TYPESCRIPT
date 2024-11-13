import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle"
import { DeleteUser, getUser, getUsers, insertUser, UpdateUser } from "../services/user.services";

// GET
const getItem = async ({ params }:Request, res:Response) =>{
    try {
        const { id } = params;
        const responseitems = await getUser(id);
        res.send(responseitems);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEM', error);
    }
}

// GET *
const getItems = async (req:Request, res:Response) =>{
    try {
        const responseitems = await getUsers();
        res.send(responseitems);
    } catch (error) {
        handleHttp(res, 'ERROR_GET_ITEMS', error);
    }
}

// UPDATE
const UpdateItem = async ({ params, body }:Request, res:Response) => {
    try {
        const { id } = params;
        const responsePut = await UpdateUser(id, body);
        res.send(responsePut);
    } catch (error) {
        handleHttp(res, 'ERROR_UPDATE_ITEM');
    }
}

// POST
const PostItem = async ({ body }:Request, res:Response) => {
    try {
        const responsePost = await insertUser(body);
        res.send(responsePost);
    } catch (error) {
        handleHttp(res, 'ERROR_POST_ITEM', error);
    }
}

// DELETE
const DeleteItem = async({ params }:Request, res:Response) => {
    try {
        const { id } = params;
        console.log(id)
        const responseDelete = await DeleteUser(id);
        res.json('USER_DELETE');
        
    } catch (error) {
        handleHttp(res, 'ERROR_DELETE_ITEM', error);
    }
}

export {getItems, getItem, UpdateItem, PostItem, DeleteItem};