import { Router, Request, Response } from "express";
import { getItems } from "../controllers/permissions.controllers"

const router = Router();

/** http://localhost:3002/  [GET] */
router.get("/getPermissions", getItems);

export { router };