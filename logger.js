const EventEmitter = require("events");
const uuid = require("uuid");

class Logger extends EventEmitter {
  log(msg) {
    // Call event
    this.emit("message", { id: uuid.v4(), msg }, { id2: uuid.v4() });
  }
}

/* module.exports = Logger; */

const Person = require("./person");
const Logger = require("./logger");

const logger = new Logger();

//need to on the EventEmitter class to use
logger.on("message", (data, data2) =>
  console.log("Called Listener: ", data, data2)
);
logger.log("Hello World");

const person1 = new Person("John Doe", 30);
person1.greeting();
