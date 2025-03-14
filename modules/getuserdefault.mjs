import { UserData } from "./user.mjs";
// when  default is used then no need {} in imports in main.mjs
export default function GetUserDefault()
{
    console.log("From Default");
    console.log(UserData);
}