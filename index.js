(function(context) {
  const f = require("./functions.js");
  const fun = {
    is: {
      string: o => f.isString(o),
      array: o => f.isArray(o),
      object: o => f.isObject(o),
      number: o => f.isNumber(o),
      function: o => f.isFunction(o),
      null: o => f.isNull(o),
      undefined: o => f.isUndefined(o),
      boolean: o => f.isBoolean(o),
      regexp: o => f.isRegExp(o),
      error: o => f.isError(o),
      date: o => f.isDate(o),
      symbol: o => f.isSymbol(o),
      promise: o => f.isPromise(o)
    },
    not: {
      string: o => !f.isString(o),
      array: o => !f.isArray(o),
      object: o => !f.isObject(o),
      number: o => !f.isNumber(o),
      function: o => !f.isFunction(o),
      null: o => !f.isNull(o),
      undefined: o => !f.isUndefined(o),
      boolean: o => !f.isBoolean(o),
      regexp: o => !f.isRegExp(o),
      error: o => !f.isError(o),
      date: o => !f.isDate(o),
      symbol: o => !f.isSymbol(o)
    },
    check: o => f.check(o)
  };
  if (typeof module !== "undefined" && module.exports) module.exports = fun;
  else if (typeof define === "function" && define.amd)
    define("jenis", [], function() {
      return fun;
    });
  else context.jenis = fun;
})(this);
