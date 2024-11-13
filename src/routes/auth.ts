import { Router, Request, Response } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth.controller"

const router = Router();

/** http://localhost:3002/auth/register [POST] */
router.get("/register", registerCtrl);
router.get("/login", loginCtrl);

export { router };