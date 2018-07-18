module.exports = {
  extend() {
    return Array.prototype.reduce.call(arguments,function(accum,obj) {
      for(var k in obj) {
        accum[k] = obj[k];
      }
      return accum;
    },{});
  },
  log(hash,...args) {
    var middleware = ((hash && hash.middleware) || []).concat(this.middleware);
    
    (function caller(middleware) {
      return function(hash,...args) {
        var next = caller(middleware.slice(1));
        middleware[0](next,hash,...args);
      };
    })(middleware)(hash,...args);
  },
  middleware: [],
};
