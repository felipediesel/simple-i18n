# I18n.js

I18n.js is a lightweight and expandable internationalisation (I18n) lib.


## Basic Usage

Before you try anything, you need to include i18n.js in your page, via the usual tags:

```html
<script src="i18n.js" async></script>
```

Then you should add your translation using `add_translation` and set current locale:

```js
I18n.add_translation("pt-BR", { greetings: { hello: 'Olá', welcome: 'Bem vindo' }});
I18n.locale = 'pt-BR';
```

Now you can use `II18n.t` to translate:

```js
I18n.t('greetings.hello');
```

## License

Awesomplete is released under the MIT License. See LICENSE file for
details.

Created by Felipe Diesel.
