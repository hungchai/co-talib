"use strict";
let talib = require('talib');
/**
 * co-talib executer
 * 
 *  @param parameter talib parameter 
 **/

var exec = function(parameter) {
    return function(cb) {
        talib.execute(parameter, function(result) {
            //[ 'begIndex', 'nbElement', 'result' ]  
            var begIndex = result.begIndex;
            var nbElement = result.nbElement;
            var talibResult = {};
            for (var k in result.result) {
                var out = result.result[k];
                talibResult[k] = [];
                for (var i = 0, len = begIndex + nbElement; i < len; i++) {
                    if (i < begIndex) {
                        talibResult[k][i] = null;
                    }
                    else {
                        talibResult[k][i] = out[i - begIndex];
                    }
                }
            }
            cb(null, talibResult);
        })
    }
};

module.exports = talib;
module.exports.exec = exec;