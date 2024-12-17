import { Router, Request, Response } from "express";
import { getItems, PostItem, DeleteItem, getItem } from "../controllers/rol.controller"
// import { checkJwt } from "../middleware/session";

const router = Router();

/** http://localhost:3002/rol [GET] */
router.get("/getRoles", getItems);
router.get("/filterRoles/:id", getItem);
router.post("/postRoles", PostItem);
router.delete("/deleteRoles/:id", DeleteItem);

export { router };