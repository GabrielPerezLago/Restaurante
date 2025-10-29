import { connection } from "../Data/Connection.js";

export async function getMenus(){
    try {

        const collection = await connection('menu');
        const menus = await collection.find({}).toArray();
        return menus;

    } catch (ex) {
        console.log(ex.message);
    }
}

export async function findByCriteria(params) {
    
}