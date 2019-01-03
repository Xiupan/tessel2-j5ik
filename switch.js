const Tessel = require("tessel-io");
const five = require("johnny-five");

const board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  const spdt = new five.Switch("a5");
  const led = new five.Led("b5")

  spdt.on("close", () => {
    console.log("Switch closed, off.")
    led.off()
  });

  spdt.on("open", () => {
    console.log("Switch opened, on.")
    led.on()
  });
});
