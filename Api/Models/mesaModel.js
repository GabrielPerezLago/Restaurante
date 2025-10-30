import { connection } from "../Data/Connection.js";
import logger from "../Loggers/Logger.js";

const COLECCION_NOMBRE = 'mesa';

export async function getMesas() {
    try {
        logger.info(`Entrando ha getMesas()`);

        const collection = await connection('mesa');
        const mesas = await collection.find({}).toArray();
        logger.info(`Resultado correcto resutlado de base de datos. Devolviendo Mesas ...`);

        return mesas;

    } catch(ex) {
        logger.error(ex.message);
    }
}