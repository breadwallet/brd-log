var Core = require('./core');

class Logger {
  constructor(options) {
    this.options = options;
  }

  extend(options) {
    return new Logger({ ...this.options, ...options });
  }
  
  log(...args) {
    Core.log({ ...this.options, level: 'log' },...args);
  }

  info(...args) {
    Core.log({ ...this.options, level: 'info' },...args);
  }
  
  warn(...args) {
    Core.log({ ...this.options, level: 'warn' },...args);
  }

  error(...args) {
    Core.log({ ...this.options, level: 'error' },...args);
  }
}

module.exports = function(options) {
  return new Logger(options);
}
