import app from './app';
import { APP_PORT } from "./utilities/secrets";
import logger from "./utilities/logger";
import connection from './database';


app
  .listen(APP_PORT, async() => {
    await connection.sync()
    logger.info(`server running on port : ${APP_PORT}`);
    console.log(`server running on port : ${APP_PORT}`);
  })
  .on('error', (e) => logger.error(e));
