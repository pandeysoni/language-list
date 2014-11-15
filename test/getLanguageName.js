'use strict';

var test = require('tap').test;
var languages = require('../')();

test('get name from measure code', function(t) {
  t.equal(languages.getLanguageName('BH'), 'Bihari', 'code "BH" should return Pound');
  t.equal(languages.getLanguageName('bh'), 'Bihari', 'code "bh" should return Pound');
  t.type(languages.getLanguageName('BH'), 'string', 'type of code "BH" is string');
  t.type(languages.getLanguageName('Bihari'), 'undefined', 'code "Bihari" should return undefined');
  t.type(languages.getLanguageName('XX'), 'undefined', 'code "XX" should return undefined');
  t.type(languages.getLanguageName(''), 'undefined', 'empty code should return undefined');
  t.end();
});
