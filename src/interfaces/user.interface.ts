import { Auth } from "./auth.interface";

export interface User extends Auth{
    ID_User?:number;
    Nombre:string;
    Departament:string;
    ID_Rol:number;
}