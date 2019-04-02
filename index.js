const Person = require("./person");
const Logger = require("./logger");

const logger = new Logger();

//need to on the EventEmitter class to use
logger.on("message", data => console.log("Called Listener: ", data));
logger.log("Hello World");

const person1 = new Person("John Doe", 30);
person1.greeting();

console.log("Second Commit Works");
