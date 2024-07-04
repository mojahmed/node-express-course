const EventEmitter = require("events");

//  new instance of EventEmitter
const emitter = new EventEmitter();

emitter.on("greet", () => {
  console.log("Hello, world!");
});

emitter.emit("greet"); 

