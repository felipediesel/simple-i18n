;(function () {
 'use strict';

  var _ = {
    locale: "en",
    translations: {},
  };

  _.add_translation = function (locale, object) {
    if (this.translations[locale] === undefined) {
      this.translations[locale] = {};
    }

    this.translations[locale] = deepExtend(this.translations[locale], object);
  };

  _.translate = function (term, options) {
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
    translated = _.translations[_.locale];

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
    return _.interpolate(translated, options);
  };

  _.interpolate = function (text, values) {
    var key;

    if (values === undefined) {
      values = {};
    }
    for (key in values) {
      text = text.replace("%{" + key + "}", values[key]);
    }
    return text;
  };

  _.t = _.translate;

  var deepExtend = function(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
      var obj = arguments[i];

      if (!obj) {
        continue;
      }

      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key] === 'object') {
            out[key] = deepExtend(out[key], obj[key]);
          } else {
            out[key] = obj[key];
          }
        }
      }
    }

    return out;
  };

  // Make sure to export I18n on self when in a browser
  if (typeof self !== 'undefined') {
    self.I18n = _;
  }
  // Expose I18n as a CJS module
  if (typeof exports === 'object') {
    module.exports = _;
  }
} ());
