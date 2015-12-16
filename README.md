# co-talib
co-based wrapper for talib

# Get starts
Install oransel/node-talib
```
npm install talib
npm install co-talib
```

## Usages
  exec() integrates with co and the yield keyword
```
var talib = require('co-talib');
var result = yield talib.exec({...});
```

## Example
=========
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
