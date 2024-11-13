import { hash, compare } from "bcryptjs"

const encrypt = async (pass:string) => {
    const passwordHash = await hash(pass, 8);
    return passwordHash;
};

const verified = () => {

};

export {encrypt, verified};