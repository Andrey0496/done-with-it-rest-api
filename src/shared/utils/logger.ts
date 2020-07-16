import { createLogger, format, transports } from 'winston';

const getFileName = () => {
    const date = new Date();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();

    return [date.getFullYear(), (mm > 9 ? '' : '0') + mm, (dd > 9 ? '' : '0') + dd].join('-');
};

const logger = createLogger({
    exitOnError: false,
    transports: [
        new transports.File({
            filename: `./logs/${getFileName()}.log`,
            format: format.json(),
            handleExceptions: true,
            level: 'info',
            maxFiles: 5,
            maxsize: 5242880,
            silent: process.env.NODE_ENV === 'test',
        }),
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.timestamp(),
                format.align(),
                format.printf((info) => {
                    const { timestamp, level, message, ...args } = info;
                    const ts = timestamp.slice(0, 19).replace('T', ' ');

                    return `${ts} [${level}]: ${message} ${
                        Object.keys(args).length ? JSON.stringify(args, null, 2) : ''
                    }`;
                }),
            ),
            handleExceptions: true,
            level: 'debug',
            silent: process.env.NODE_ENV === 'test',
        }),
    ],
});

export { logger };
