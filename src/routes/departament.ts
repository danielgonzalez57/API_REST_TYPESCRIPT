import { Router, Request, Response } from "express";
import { getItems } from "../controllers/departament.controller"

const router = Router();

/** http://localhost:3002/departament [GET] */
router.get("/getDepartament", getItems);

export { router };