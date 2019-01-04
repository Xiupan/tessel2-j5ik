const Tessel = require("tessel-io");
const five = require("johnny-five");

const express = require('express');
const http = require('http');
const os = require("os");
const cors = require('cors');

const app = express();

app.use(cors())

const server = http.createServer(app)
const port = 5000

server.listen(port)
console.log(`Tessel2 NodeJS Server running on port ${port}.`);

const board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {
  console.log(`http://${os.networkInterfaces().wlan0[0].address}`);

  const led = new five.Led("a5");
  // led.on();

  app.get('/tessel/led-on', (req, res) => {
    led.on();
    res.send({msg: 'led on!'})
  })

  app.get('/tessel/led-off', (req, res) => {
    led.off();
    res.send({msg: 'led off!'})
  })
});
