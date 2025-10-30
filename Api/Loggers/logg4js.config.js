export default {
  appenders: {
    consola: { type: 'console' },
    archivo: { 
      type: 'dateFile',
      filename: 'logs/app',
      pattern: 'yyyy-MM-dd.log',
      compress: true,  // Comprime logs antiguos
      daysToKeep: 7    // Guarda solo los últimos 7 días
    }
  },
  categories: {
    default: { appenders: ['consola', 'archivo'], level: 'debug' },
    http: { appenders: ['consola', 'archivo'], level: 'info' }
  }
};