import { Router, Request, Response } from "express";
import {  DeleteItem, getItem, getItems, PostItem, UpdateItem } from "../controllers/user";

const router = Router();

/** http://localhost:3002/users/ [*] */
// GET *
router.get("/", getItems);

// GET
router.get("/:id", getItem);

// POST
router.post("/", PostItem);

// PUT
router.put("/:id", UpdateItem);

// DELETE
router.delete("/:id", DeleteItem);

export { router };