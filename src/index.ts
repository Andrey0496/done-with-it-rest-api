import * as config from 'config';

import { app } from './app';
import { logger } from './shared/utils/logger';

const port = process.env.PORT || config.server.port;

app.listen(port, (err) => {
    if (err) {
        return logger.error(err);
    }
    return logger.info(`server is listening on ${port}`);
});
