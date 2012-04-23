I18n = {
  locale: "en",
  translations: {},

  add_translation: function (locale, object) {
    if (this.translations[locale] === undefined) {
      this.translations[locale] = {};
    }

    $.extend(this.translations[locale], object);
  },

  translate: function (term, options) {
    var i, translated;

    if (options === undefined) {
      options = {};
    }
    if (typeof term !== "object") {
      if (term[0] === ".") {
        term = Pages.page + term;
      }
      term = term.split(".");
    }
    translated = I18n.translations[I18n.locale];

    i = 0;
    while (i < term.length) {
      if (translated[term[i]] !== undefined) {
        translated = translated[term[i]];
      } else {
        translated = undefined;
        i = term.length;
      }
      i = i + 1;
    }
    return I18n.interpolate(translated, options);
  },

  interpolate: function (text, values) {
    var key;

    if (values === undefined) {
      values = {};
    }
    for (key in values) {
      text = text.replace("%{" + key + "}", values[key]);
    }
    return text;
  },
};

I18n.t = I18n.translate;