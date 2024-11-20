import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req:Request, res:Response, next:NextFunction) => {
    try {
        const jwtByUSer = req.headers.authorization || '';
        const jwt = jwtByUSer.split(' ').pop();
        const isOk = verifyToken(`${jwt}`);
        if(!isOk){
            res.status(401);
            res.send("NO_TIENES_JWT_VALIDO");
        }else{
            next();
        }
    } catch (error) {
        res.status(400);
        res.send('SESSION_NO_VALIDA');
    }
}

export { checkJwt };