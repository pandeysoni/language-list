
var data = require('./data.json');
var stictLang = require('./strict-languages');
/**
 * Precompute measure and code lookups.
 */
var languageNameMap = {};
var languageCodeMap = {};
data.forEach(function(language) {
  languageNameMap[language.language.toLowerCase()] = language.code;
  languageCodeMap[language.code.toLowerCase()] = language.language;
});
var stictlanguageNameMap = {};
var stictlanguageCodeMap = {};
stictLang.forEach(function(language) {
  stictlanguageNameMap[language.language.toLowerCase()] = language.code;
  stictlanguageCodeMap[language.code.toLowerCase()] = language.language;
});

module.exports = LanguageList;
function LanguageList() {
  if (!(this instanceof LanguageList)) return new LanguageList();
};

LanguageList.prototype.getLanguageCode = function getLanguageCode(name) {
  return languageNameMap[name.toLowerCase()];
};

LanguageList.prototype.getLanguageName = function getLanguageNames(code) {
  return languageCodeMap[code.toLowerCase()];
};

LanguageList.prototype.getStictLanguageCode = function getStictLanguageCode(name) {
  return stictlanguageNameMap[name.toLowerCase()];
};

LanguageList.prototype.getStictLanguageName = function getStictLanguageName(code) {
  return stictlanguageCodeMap[code.toLowerCase()];
};

LanguageList.prototype.getLanguageNames = function getLanguageNames() {
  return data.map(function(language) {
    return language.language;
  });
};

LanguageList.prototype.getLanguageCodes = function getLanguageCodes() {
  return data.map(function(language) {
    return language.code;
  });
};

LanguageList.prototype.getData = function getData() {
  return data;
};
