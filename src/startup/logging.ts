import { Application } from 'express';
import morgan from 'morgan';
import { logger } from '../shared/utils/logger';

function addLogging(app: Application): void {
    const environment: string = app.get('env');
    logger.info(`Environment: ${environment}`);

    const write = (msg: string) => logger.info(msg.substring(0, msg.lastIndexOf('\n')));

    app.use(morgan(':method :url :status - :response-time ms', { stream: { write } }));

    process.on('uncaughtException', (ex) => {
        logger.error(ex.message, ex);
        throw ex;
    });

    process.on('unhandledRejection', (ex: Error) => {
        logger.error(ex.message, ex);
        throw ex;
    });
}

export default addLogging;
