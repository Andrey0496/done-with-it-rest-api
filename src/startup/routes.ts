import { Application, json } from 'express';

import healthRouter from '../modules/health/health.router';

export default (app: Application): void => {
    app.use(json());
    app.use('/api/health', healthRouter);
};
