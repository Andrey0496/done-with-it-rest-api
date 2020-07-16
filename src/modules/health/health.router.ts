import express from 'express';
import { getHealthStatus } from './health.controller';

const healthRouter: express.Router = express.Router();

healthRouter.get('/', getHealthStatus);

export default healthRouter;
