// Common Js every file is a module by default
//Modules - Encapsulated code (only share minmum)
const names = require("./names-2");
const sayHi = require("./utils-3")
// console.log(names)



sayHi("susan")
sayHi(names.john)
sayHi(names.peter)