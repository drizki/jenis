const functions = {
  isString: object => typeof object === "string" || object instanceof String,
  isArray: object => {
    if (object && typeof object === "object" && object.constructor === Array)
      return true;
    return false;
  },
  isObject: object => {
    if (object && typeof object === "object" && object.constructor === Object)
      return true;
    return false;
  },
  // eslint-disable-next-line no-restricted-globals
  isNumber: object => typeof object === "number" && isFinite(object),
  isFunction: object => typeof object === "function",
  isNull: object => object === null,
  isUndefined: object => typeof object === "undefined",
  isBoolean: object => typeof object === "boolean",
  isRegExp: object =>
    object && typeof object === "object" && object.constructor === RegExp,
  isError: object =>
    object instanceof Error && typeof object.message !== "undefined",
  isDate: object => object instanceof Date,
  isSymbol: object => typeof object === "symbol",
  isPromise: object => object instanceof Promise,
  check: object => {
    switch (typeof object) {
      case "number":
        return "number";
      case "string":
        return "string";
      case "boolean":
        return "boolean";
      case "undefined":
        return "undefined";
      case "function":
        return "function";
      case "symbol":
        return "symbol";
      case "object":
      default:
        switch (Object.prototype.toString.call(object)) {
          case "[object Number]":
            return "number";
          case "[object String]":
            return "string";
          case "[object Boolean]":
            return "boolean";
          case "[object Undefined]":
            return "undefined";
          case "[object Null]":
            return "null";
          case "[object Function]":
            return "function";
          case "[object Array]":
            return "array";
          case "[object Symbol]":
            return "symbolin";
          case "[object Promise]":
            return "promise";
          case "[object Error]":
            return "error";
          case "[object RegExp]":
            return "regexp";
          case "[object Date]":
            return "date";
          default:
            if (typeof Array !== "undefined" && object instanceof Array)
              return "array";
            if (typeof Function !== "undefined" && object instanceof Function)
              return "function";
            if (typeof Promise !== "undefined" && object instanceof Promise)
              return "promise";
            if (typeof Error !== "undefined" && object instanceof Error)
              return "error";
            if (typeof RegExp !== "undefined" && object instanceof RegExp)
              return "regexp";
            if (typeof Date !== "undefined" && object instanceof Date)
              return "date";
        }
    }
    return "object";
  }
};

module.exports = functions;
