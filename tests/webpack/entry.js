import Core from "../../core.js"

Core.middleware.push(require("../../middleware/prefix"));
Core.middleware.push(require("../../middleware/passthrough"));

console.log("This is a log");
console.warn("This is a warning.");
