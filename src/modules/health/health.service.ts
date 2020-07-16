import { getEnv } from '../../shared/utils/env';

import { version } from '../../../package.json';
import { HealthStatusDto } from './dto/health.dto';

function getHealthStatus(): HealthStatusDto {
    return { environment: getEnv(), version };
}

export { getHealthStatus };
