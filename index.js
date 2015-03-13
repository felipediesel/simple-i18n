"use strict";

I18n.add_translation("pt-BR", {
  test: 'OK',
  greetings: {
    hello: 'Olá',
    welcome: 'Bem vindo'
  }
});
I18n.locale = 'pt-BR';

document.getElementById('hello-1').innerHTML = I18n.t('greetings.hello');
document.getElementById('welcome-1').innerHTML = I18n.t('greetings.welcome');

// Example 2

I18n.add_translation("pt-BR", {
  greetings: {
    hello: 'Olá',
    welcome: 'Bem vindo'
  }
});
document.getElementById('hello-2').innerHTML = I18n.t('greetings.hello');

I18n.add_translation("pt-BR", {
  test: 'OK',
  greetings: {
    hello: 'Oi',
    bye: 'Tchau'
  }
});

document.getElementById('hello-3').innerHTML = I18n.t('greetings.hello');
document.getElementById('test-3').innerHTML = I18n.t('test');
