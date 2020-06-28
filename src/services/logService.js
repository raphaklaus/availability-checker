import winston from 'winston'

export const configure = () => {
  try {
    const logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({
          stack: true
        }),
        winston.format.splat(),
        winston.format.json()
      ),
      defaultMeta: {
        service: 'scheduler'
      },
      transports: [
        new winston.transports.File({
          filename: 'scheduler-error.log',
          level: 'error'
        }),
        new winston.transports.File({
          filename: 'scheduler-combined.log'
        }),
        new winston.transports.Console({
          level: 'info',
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.simple()
          )
        })
      ]
    })

    console.info = (...args) => logger.info(...args)
    console.warn = (...args) => logger.warn(...args)
    console.error = (...args) => logger.error(...args)
  } catch (error) {
    console.log(error)
  }
}
