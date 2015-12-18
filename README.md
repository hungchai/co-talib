# co-talib
co-based wrapper for talib

# Getting started
Install oransel/node-talib
```
npm install talib
npm install co-talib
```

## Usage
  exec({...}) integrates with co and the yield keyword
  The input parameters please referred to 
   * [oransel/node-talib](https://github.com/oransel/node-talib)
   
```
var talib = require('co-talib');
var result = yield talib.exec({...});
```

## Example
```
var talib = require('co-talib');
var co = require('co');

co(function*(symbol, share) {
var WILLR_9 = yield talib.exec({
                name: "WILLR",
                startIdx: 0,
                endIdx: quotelength,
                high: highs,
                low: lows,
                close: closes,
                open: opens,
                inReal: closes,
                optInTimePeriod: 9
            });
  return WILLR_9;          
}).then(function(result){
  console.log(result);
});
```

# License
Copyright (c) 2012-2015 Ma Chun Hung

This library is free software; you can redistribute it and/or modify it under the terms of the GNU Lesser General Public License as published by the Free Software Foundation; either version 3 of the License, or (at your option) any later version.

This library is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more details.
