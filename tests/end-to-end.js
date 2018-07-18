var Core =  require("../core");

Core.middleware.push(require("../middleware/prefix"));
Core.middleware.push(require("../middleware/passthrough"));

const console = require('../logger')();

console.info("This is an info");
console.log("This is a log");
console.warn("This is a warn");
console.error("This is an error");

