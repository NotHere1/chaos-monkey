'use strict';

const bot = require('./src/bot');

var chaosEditorUrl = process.env.EDITOR_URL || 'http://localhost:3000'

bot.run(chaosEditorUrl);
