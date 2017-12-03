'use strict';

const   _ = require('lodash'),
        rw = require('./random'),
        kw = require('./keyboardEventCode');

module.exports.chaosAction = function() {
    var action;
    switch (rw.randomIntInclusive(0, 20)) {
        case 0:
            action = rw.randomName();
            break;
        case 1:
        case 2:
        case 3:
        case 16:
        case 17:
        case 18:
            action = rw.randomWord();
            break;
        case 4:
            action = rw.randomIntInclusive(0, 9).toString();
            break;
        case 5:
            action = rw.sillyName();
            break;
        case 6:
        case 12:
            action = kw['enter'].repeat(rw.randomIntInclusive(1,3));
            break;
        case 7:
        case 13:
            action = kw['tab'].repeat(rw.randomIntInclusive(1,10));
            break;
        case 8:
        case 9:
        case 19:
        case 20:
            action = kw['delete'].repeat(rw.randomIntInclusive(1,10));
            break;

        case 10:
        case 11:
        case 14:
        case 15:
            action = kw['randomAscii'].repeat(rw.randomIntInclusive(1,3));
            break;
    }
    return action;
}