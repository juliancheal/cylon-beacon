# Cylon.js For Beacon

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and
physical computing using Node.js

This repository contains the Cylon adaptor for Beacon.

For more information about Cylon, check out the repo at
https://github.com/hybridgroup/cylon

## How to Install

Install the module with:

    $ npm install cylon-beacon

## How to Use

## How to Connect

```javascript
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

```

Explain how to connect from the computer to the device here...

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

* Put your contribution guidelines here
* Submit a Github Pull Request to the appropriate branch and ideally discuss the changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers from time to time but they can complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & lint and test your code using `make test` and `make lint`.
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and free) book on git

## Release History

None yet...

## License

Copyright (c) 2014 Your Name Here. See `LICENSE` for more details
