language-list
============

Map Stores ISO 639-1 language codes to language names and vice versa.


# example 

``` js
var languages = require('language-list')();

console.log(languages.getLanguageName('bh')); // Bihari
console.log(languages.getLanguageCode('Bihari')); // bh
```

# methods

Usage:

```
var languages = require('language-list')();
```
All input is case-insensitive.

## getLanguageName(languageCode)
.
Returns the language name for that language code .
If not found, it returns `undefined`.

## getLanguageName(languageName)

Expects the language name.
Returns the language code for that language.
If not found, it returns `undefined`.

## getLanguageNames()

Returns an array of all language names.

## getLanguageCodes()

Returns an array of all language codes.

## getData()

Returns an array of all language information, in the same format as it gets imported.

# install

``` cli
npm install language-list
```

# license

BSD
