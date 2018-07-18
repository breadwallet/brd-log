module.exports = function(next,options,...args) {
  if(typeof console == 'undefined') return;
  
  var fn = console[options.level];
  if(typeof fn == 'function') {
    fn.call(console,...args);
  }
}
