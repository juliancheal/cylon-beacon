/*
 * cylon-beacon adaptor for ble beacons
 * http://cylonjs.com
 *
 * Copyright (c) 2014 Your Name Here
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require('cylon');

var Beacon = module.exports = function Adaptor(opts) {
  opts = opts || {};

  Beacon.__super__.constructor.apply(this, arguments);

  this.bleacon = require("./bleacon");
};

Cylon.Utils.subclass(Beacon, Cylon.Adaptor);

/**
 * Connects to the BLE peripheral
 *
 * @param {Function} callback to be triggered when connected
 * @return {null}
 */
Beacon.prototype.connect = function(callback) {
  console.log("Connecting...")
  callback();
};

/**
 * Disconnects from the BLE peripheral
 *
 * @param {Function} callback to be triggered when disconnected
 * @return {null}
 */
Beacon.prototype.disconnect = function(callback) {
  callback();
};

/**
 * Tells the BLE adaptor to start scanning for beacons
 *
 * @return {null}
 * @publish
 */
Beacon.prototype.startScanning = function(uuid, major, minor) {
  this._uuid = uuid;
  this._major = major;
  this._minor = minor;

  this.bleacon.startScanning(uuid, major, minor);

  // this.bleacon.on('discover', function(bleacon) {
  //   console.log(bleacon)
  // });
};

/**
 * Tells the BLE adaptor to stop scanning for beacons
 *
 * @return {null}
 * @publish
 */
Beacon.prototype.stopScanning = function() {
  this.bleacon.stopScanning();
};

Beacon.prototype.readServiceCharacteristic = function(serviceId, characteristicId, callback) {
  // this.getCharacteristic(serviceId, characteristicId, function(err, c) {
    this.bleacon.on('discover', function(err, data) {
      callback(err, data);
    });
  // });
};
