/*
 * cylon-ble DeviceInformation driver
 * http://cylonjs.com
 *
 * Copyright (c) 2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Driver = require("./driver");

var Advertisement = []

var BLEiBeacon = module.exports = function BLEDeviceInformation(opt) {
  BLEiBeacon.__super__.constructor.apply(this, arguments);

  // this.serviceId = opt.serviceId || DeviceInformation;

  this.commands = {
    getAdvertisement: this.getAdvertisement
  };
};

Cylon.Utils.subclass(BLEiBeacon, Driver);

/**
 * Gets the model number of the BLE device
 *
 * @param {Function} callback to be triggered when data is read
 * @return {null}
 * @publish
 */
BLEiBeacon.prototype.getAdvertisement = function(callback) {
  this._getServiceCharacteristic(Advertisement, callback);
};
