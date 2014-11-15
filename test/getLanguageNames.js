'use strict';

var test = require('tap').test;
var languages = require('../')();
var data = require('../data.json');

test('get all language names', function(t) {
  t.equal(languages.getLanguageNames().length, data.length, 'language names should be as many as languages');
  t.ok(languages.getLanguageNames().indexOf('bihari') > -1, 'languages names should include languages');
  t.ok(languages.getLanguageNames().indexOf('bihari') === -1, 'languages names is case-sensitive, does not include bihari');
  t.type(languages.getLanguageNames(), Array, 'language list is an array');
  t.end();
});
