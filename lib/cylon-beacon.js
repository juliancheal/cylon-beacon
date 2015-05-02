/*
 * cylon-beacon
 * http://cylonjs.com
 *
 * Copyright (c) 2014 Your Name Here
 * Your License Here
*/

'use strict';

var Beacon = require('./beacon'),
    Driver = require('./driver');

module.exports = {
  // Adaptors your module provides, e.g. ['spark']
  adaptors: ["ble", "beacon"],

  // Drivers your module provides, e.g. ['led', 'button']
  drivers: [],

  adaptor: function(opts) {
    return new Beacon(opts);
  },

  driver: function(opts) {
    return new Driver(opts);
  }
};
