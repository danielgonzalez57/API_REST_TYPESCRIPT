import { Router, Request, Response } from "express";
import { getItems } from "../controllers/orders.controller"
import { checkJwt } from "../middleware/session";

const router = Router();

/** http://localhost:3002/auth/register [POST] */
router.get("/", checkJwt, getItems);

export { router };