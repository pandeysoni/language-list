'use strict';

var test = require('tap').test;
var languages = require('../')();
var data = require('../data.json');

test('get all language codes', function(t) {
  t.equal(languages.getLanguageCodes().length, data.length, 'codes should be as many as languages');
  t.ok(languages.getLanguageCodes().indexOf('Bh') > -1, 'codes should include BH');
  t.ok(languages.getLanguageCodes().indexOf('bh') === -1, 'codes is case-sensitive, does not include bh');
  t.type(languages.getLanguageCodes(), Array, 'code list is an array');
  t.end();
});
