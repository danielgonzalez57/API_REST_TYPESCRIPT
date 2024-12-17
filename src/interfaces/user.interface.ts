import { Auth } from "./auth.interface";

export interface User extends Auth{
    ID_User?:number;
    Nombre:string;
    Departament:number;
    ID_Rol:number;
}