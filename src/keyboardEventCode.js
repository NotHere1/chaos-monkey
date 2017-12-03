'use strict';

const rw = require('./random');
        
const keyCodes = {
	'enter': '\u000d',
	'tab': '\u0009',
	'delete': '\u0008',
	'space': '\u0020',
    'randomAscii': rw.randomIntInclusive(0, 255).toString(16)
}

module.exports = keyCodes;
