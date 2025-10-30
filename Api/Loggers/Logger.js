import log4js from "log4js";
import config  from "../Loggers/logg4js.config.js";

log4js.configure(config);

const logger = log4js.getLogger();

export { logger, log4js };
export default logger;