import { UserData } from "./user.mjs"
// when  only export is used then {} is used in imports in main.mjs
export const getuser = ()=>
{
    console.log("User data from export" );
    console.log(UserData);
}