'use strict';

var i18n = require('./i18n.js')

i18n.add_translation("pt-BR", {
  test: 'OK',
  greetings: {
    hello: 'Olá',
    welcome: 'Bem vindo'
  }
});
i18n.locale = 'pt-BR';

console.log(i18n.t('greetings.hello'));
console.log(i18n.t('greetings.welcome'));
console.log("Hallo");

// Example 2

i18n.add_translation("pt-BR", {
  greetings: {
    hello: 'Olá',
    welcome: 'Bem vindo'
  }
});
console.log(i18n.t('greetings.hello'));

i18n.add_translation("pt-BR", {
  test: 'OK',
  greetings: {
    hello: 'Oi',
    bye: 'Tchau'
  }
});

console.log(i18n.t('greetings.hello'));
console.log(i18n.t('test'));
