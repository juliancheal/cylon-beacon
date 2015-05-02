/*
 * cylon-beacon
 * http://cylonjs.com
 *
 * Copyright (c) 2014 Your Name Here
 * Your License Here
*/

'use strict';

var Beacon = require('./beacon');

var Drivers = {
  "ble-ibeacon": require("./ibeacon")
};

module.exports = {
  adaptors: ["ble", "beacon"],
  drivers: Object.keys(Drivers),

  adaptor: function(opts) {
    return new Beacon(opts);
  },

  driver: function(opts) {
    for (var d in Drivers) {
      if (opts.driver === d) {
        return new Drivers[d](opts);
      }
    }

    return null;
  }
};
