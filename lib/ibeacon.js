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

var DeviceInformation = "180a",
    ModelNumber = "2a24",
    SystemId = "2a23",
    FirmwareRevision = "2a26",
    HardwareRevision = "2a27",
    ManufacturerName = "2a29",
    PnPId = "2a50";

var BLEiBeacon = module.exports = function BLEDeviceInformation(opt) {
  BLEiBeacon.__super__.constructor.apply(this, arguments);

  this.serviceId = opt.serviceId || DeviceInformation;

  this.commands = {
    getManufacturerName: this.getManufacturerName,
    getModelNumber: this.getModelNumber,
    getSystemId: this.getSystemId
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
BLEiBeacon.prototype.getModelNumber = function(callback) {
  this._getServiceCharacteristic(ModelNumber, callback);
};

/**
 * Gets the system ID of the BLE device
 *
 * @param {Function} callback to be triggered when data is read
 * @return {null}
 * @publish
 */
BLEiBeacon.prototype.getSystemId = function(callback) {
  this._getServiceCharacteristic(SystemId, callback);
};

/**
 * Gets the hardware revision of the BLE device
 *
 * @param {Function} callback to be triggered when data is read
 * @return {null}
 * @publish
 */
BLEiBeacon.prototype.getHardwareRevision = function(callback) {
  this._getServiceCharacteristic(HardwareRevision, function(err, data) {
    if (data !== null) {
      data = data.toString();
    }
    callback(err, data);
  });
};

/**
 * Gets the firmware revision of the BLE device
 *
 * @param {Function} callback to be triggered when data is read
 * @return {null}
 * @publish
 */
BLEiBeacon.prototype.getFirmwareRevision = function(callback) {
  this._getServiceCharacteristic(FirmwareRevision, function(err, data) {
    if (data !== null) {
      data = data.toString();
    }
    callback(err, data);
  });
};

/**
 * Gets the manufacturer name of the BLE device
 *
 * @param {Function} callback to be triggered when data is read
 * @return {null}
 * @publish
 */
BLEiBeacon.prototype.getManufacturerName = function(callback) {
  this._getServiceCharacteristic(ManufacturerName, function(err, data) {
    if (data !== null) {
      data = data.toString();
    }
    callback(err, data);
  });
};

/**
 * Gets the PnP ID of the BLE device
 *
 * @param {Function} callback to be triggered when data is read
 * @return {null}
 * @publish
 */
BLEiBeacon.prototype.getPnPId = function(callback) {
  this._getServiceCharacteristic(PnPId, callback);
};
