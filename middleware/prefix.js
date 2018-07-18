module.exports = function(next,options,...args) {
  var level = options.level || 'log';
  level =  ' '.repeat(5-level.length) + level;
  
  next(options,`[${level}] ${args[0]}`,...args.slice(1));
}
