'use strict';

var test = require('tap').test;
var languages = require('../')();
var data = require('../data.json');

test('get all language names and code', function(t) {
  t.equal(languages.getData().length, data.length, 'data list should be the same length as data.json');
  t.type(languages.getData(), Array, 'data list is an array');
  t.type(languages.getData()[0], Object, 'first item in list should be object');
  t.end();
});
