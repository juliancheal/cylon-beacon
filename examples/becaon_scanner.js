"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    beacon: { adaptor: "beacon", module: "cylon-beacon" }
  },

  devices: {
    ibeacon: { driver: "ble-ibeacon" }
  },

  work: function(my) {
    my.beacon.startScanning();

    my.ibeacon.getAdvertisement(function(err, data) {
      if (!!err) {
        console.log("error: ", err);
        return;
      }

      console.log("data: ", data);
    });
  }
}).start();
