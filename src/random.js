'use strict';

const randomWord = require('random-words');
const sillyName = require('sillyname');
const getRandomName = require('random-name')

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function getWeightedRandomBool(weight = 7) {
	return getRandomIntInclusive(0,9) > weight ? true : false;
}

function getRandomWord(min = 1, max = 3, join=(getWeightedRandomBool(9) === false ? " " : "\n")) {
	return randomWord({ min: min, max: max, join: join }) + (getWeightedRandomBool() === false ? "\n" : "");
}

function getChaosMonkeyName() {
	return 'monkey: ' + getRandomName.first();
}

module.exports = {
	sillyName: sillyName,
	randomWord: getRandomWord,
	randomName: getRandomName,
	randomFirstName: getRandomName.first,
	randomLastName: getRandomName.last,
	randomChaosMonkey: getChaosMonkeyName,
	weightedRandomBool: getWeightedRandomBool,
    randomIntInclusive: getRandomIntInclusive
}
