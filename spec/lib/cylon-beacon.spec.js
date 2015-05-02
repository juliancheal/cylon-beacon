"use strict";

var module = source("cylon-beacon");

var Driver = source('driver');

describe("Cylon.Beacon", function() {

  describe("#drivers", function() {
    it('is an array of supplied drivers', function() {
      expect(module.drivers).to.be.eql([]);
    });
  });

  // describe("#dependencies", function() {
  //   it('is an array of supplied dependencies', function() {
  //     expect(module.dependencies).to.be.eql([]);
  //   });
  // });

  describe("#driver", function() {
    it("returns an instance of the Driver", function() {
      expect(module.driver()).to.be.instanceOf(Driver);
    });
  });
});
