import { connection } from "../Data/Connection.js";
import logger from "../Loggers/Logger.js";

export async function getMenus(){
    try {
        logger.info(`Entrando ha getMenus()`);
        const collection = await connection('menu');
        const menus = await collection.find({}).toArray();
        logger.info(`Resultado correcto resutlado de base de datos. Devolviendo Menus ...`);
        return menus;
        
    } catch (ex) {
        logger.error(ex.message);
    }
}

export async function findByCriteria(params) {
    
}