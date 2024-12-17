import { Router, Request, Response } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth.controller"
import { checkJwt } from "../middleware/session";

const router = Router();

/** http://localhost:3002/auth/register [POST] */
router.post("/register", checkJwt, registerCtrl);
router.post("/login", loginCtrl);

export { router };