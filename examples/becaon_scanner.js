"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    beacon: { adaptor: "beacon", module: "cylon-beacon" }
  },

  work: function(my) {
    // my.beacon.startScanning();
    console.log(my.beacon)
  }
}).start();
