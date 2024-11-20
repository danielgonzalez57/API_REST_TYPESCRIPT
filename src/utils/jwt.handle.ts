 import { sign, verify } from "jsonwebtoken";
 const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101';

const generateToken = async (id:string) => {
    const jwt = sign({ id }, JWT_SECRET, {
        expiresIn: "2hr",
});
    return jwt;
};

const verifyToken = async (jwt:string) => {  
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};

export { generateToken, verifyToken };