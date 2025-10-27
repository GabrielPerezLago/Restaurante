import { connection } from "../Data/Connection.js";

export async function getMenus(){
    try {

        const collection = await connection();
        const menus = await collection.find({}).toArray();
        return menus;

    } catch (ex) {
        console.log(ex.message);
    }
} 