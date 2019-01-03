const five = require("johnny-five");
const Tessel = require("tessel-io");
const board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  let sensor = new five.Sensor({
    pin: "a7",
    threshold: 2
  });

  let led = new five.Led("b5");

  sensor.on("change", () => {
    console.log(sensor.value)
    led.brightness(sensor.scaleTo(0, 255));
  });
});
