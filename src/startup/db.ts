import * as config from 'config';
import { createConnection, Connection } from 'typeorm';
import { logger } from '../shared/utils/logger';

export default async (): Promise<void> => {
    const { type, host, port, username, password, database, synchronize } = config.db;

    const connection: Connection = await createConnection({
        type,
        host,
        port,
        username,
        password,
        database,
        entities: ['/../modules/**/*.entity.ts'],
        synchronize,
    });

    if (connection === undefined) {
        throw new Error('Error connecting to database');
    } // In case the connection failed, the app stops.

    logger.info(`Connected to ${database}...`);
};
