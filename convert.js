'use strict'

var data = require('./data.json');

/**
 * Precompute name and code lookups.
 */
var nd = [];
data.forEach(function(language) {

  console.log('  { "languageCode": "%s", "languageName": "%s" },', language.Code, language.Language);
});

//console.log(JSON.stringify(nd));
