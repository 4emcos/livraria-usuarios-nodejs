const winston = require ('winston');

const logger = winston.createLogger ({
    level: 'info',
    transports: [
        new winston.transports.File ({
            level: 'error',
            filename: 'logs/erros.log'
        }),
        new winston.transports.File ({
            level : 'info',
            filename: 'logs/combinado.log'
        }),
    ]
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console());
}

module.exports = logger;