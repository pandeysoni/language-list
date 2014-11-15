'use strict';

var test = require('tap').test;
var languages = require('../')();

test('get code from language name', function(t) {
  t.equal(languages.getLanguageCode('Bihari'), 'bh', 'name "Bihari" should return bh');
  t.equal(languages.getLanguageCode('bihari'), 'bh', 'name "bihari" should return bh');
  t.equal(languages.getLanguageCode('BIHARI'), 'bh', 'name "BIHARI" should return bh');
  t.type(languages.getLanguageCode('Bihari'), 'string', 'type of name "Bihari" is string');
  t.type(languages.getLanguageCode('bh'), 'undefined', 'type of name "bh" is undefined');
  t.type(languages.getLanguageCode('FarFarAwayLand'), 'undefined', 'name "FarFarAwayLand" should return undefined');
  t.type(languages.getLanguageCode(''), 'undefined', 'empty name should return undefined');
  t.end();
});
