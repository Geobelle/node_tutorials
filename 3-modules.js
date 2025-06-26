//commonJS, every file is module (by default)
//modules - encapsulated code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");

const data = require("./6-alternative");

require("./7-mindgrenade");

sayHi("gee");
sayHi(names.jay);
sayHi(names.pete);
