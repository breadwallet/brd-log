# BRD-log

Another logging framework? Srsly?  Yep.  Other log frameworks are
great, got no problem they exist, but they're usually not particularly
transparent to use.  brd-log is designed to seamlessly integrate into
webpack-based systems (any modern loader/roller will probably work),
start out impossibly lightweight, and grow with the needs of your
application.  The goal is basically to make logging painless and easy
to use for you, and also make your code more portable, because every
`console.` function does exactly what you would expect, and oh so much
more.

## Installing

```
npm i --save brd-log
```

To configure your webpack instance, add this rule:

```
{
  test: /(\.js)$/,
  exclude: /node_modules/,
  loader: 'brd-log/loader',
}
```

If you're a fan of vue single-file components, get your vue-loader
rule to look a bit like this:

```
{
  loader: 'vue-loader',
  options: {
    loaders: {
      js: [
        /* default JS items, probably babel-loader... */,
        { loader: 'brd-log/loader', except: /node_modules/ }
      ]
    }
  }
}
```
  
Take a look at how the loader works, and if you want to automatically
configure objects in your own way.

Once you've done that, you'll want to, at the very least, set up the
"passthrough" middleware:

```
var Core =  require("brd-log/core");
Core.middleware.push(require("brd-log/middleware/passthrough"));
```

This makes it so that everything that gets logged actually prints to
the console.  By default it silently eats errors because that is the
most simple setup imaginable, and by forcing you to set up at least
one middleware rule to start, you can more easily build whatever
functionality you desire.

## Middleware

brd-log leverages a middleware pattern similar to express or redux.
You can add layers of middleware to change the behavior and make
brd-log suit your specific needs.  Examples of middleware can be found
in the middleware directory, but each middleware function takes the
following arguments:

```
function noop(next,options,...args) {
  next(options,...args);
}
```

For example, you might want to prefix something useful to the front,
in this case the file & log level:

```
Core.middleware.push(function(next,options,message,...args) {
  next(options,`[${option.level} in ${options.file}] ${message}`,...args);
})
```