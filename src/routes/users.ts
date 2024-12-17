import { Router, Request, Response } from "express";
import {  DeleteItem, getItem, getItems, PostItem, UpdateItem } from "../controllers/user.controller";

const router = Router();

/** http://localhost:3002/users/ [*] */
// GET * 
router.get("/masterUser", getItems);

// GET
router.get("/:id", getItem);

// POST
router.post("/createdUser", PostItem);

// PUT
router.put("/updateUser/:id", UpdateItem);

// DELETE
router.delete("/deleteUser/:id", DeleteItem);

export { router };