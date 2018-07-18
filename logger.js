var Core = require('./core');

class Logger {
  constructor(options) {
    this.options = options;
  }

  extend(options) {
    return new Logger(Core.extend(this.options,options));
  }
  
  log() {
    Core.log.apply(Core,[Core.extend(this.options, { level: 'log' })].concat(Array.prototype.slice.call(arguments)));
  }

  info() {
    Core.log.apply(Core,[Core.extend(this.options, { level: 'info' })].concat(Array.prototype.slice.call(arguments)));
  }
  
  warn() {
    Core.log.apply(Core,[Core.extend(this.options, { level: 'warn' })].concat(Array.prototype.slice.call(arguments)));
  }

  error() {
    Core.log.apply(Core,[Core.extend(this.options, { level: 'error' })].concat(Array.prototype.slice.call(arguments)));
  }
}

module.exports = function(options) {
  return new Logger(options);
}
