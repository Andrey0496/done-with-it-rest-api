import { Request, Response } from 'express';

import * as healthService from './health.service';
import { HealthStatusDto } from './dto/health.dto';

const getHealthStatus = (req: Request, res: Response): Response<HealthStatusDto> => {
    const healthStatus: HealthStatusDto = healthService.getHealthStatus();
    return res.send(healthStatus);
};

export { getHealthStatus };
