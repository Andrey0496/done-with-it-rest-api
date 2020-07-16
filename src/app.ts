import express, { Application } from 'express';

// this is all it takes to enable async/await for express middleware
import 'express-async-errors';

import configureDb from './startup/db';
import configureLogging from './startup/logging';
import configureRoutes from './startup/routes';

const app: Application = express();

configureDb();
configureLogging(app);
configureRoutes(app);

export { app };
