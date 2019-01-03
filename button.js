const Tessel = require("tessel-io");
const five = require("johnny-five");

const board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  const button = new five.Button("a2");
  const led = new five.Led("a5");
  button.on("press", () => {
    console.log("Button Pressed!")
    led.on()
  });
  button.on("release", () => {
    console.log("Button Released!")
    led.off()
  });
});
