/* eslint-disable */
const {
  isString,
  isObject,
  isArray,
  isNumber,
  isFunction,
  isNull,
  isUndefined,
  isBoolean,
  isError,
  isDate,
  isPromise
} = require('../functions');
const { dynamicData } = require('./data');

const stringData = dynamicData('string');
const objectData = dynamicData('object');
const arrayData = dynamicData('array');
const numberData = dynamicData('number');
const functionData = dynamicData('function');
const nullData = dynamicData('null');
const undefinedData = dynamicData('undefined');
const booleanData = dynamicData('boolean');
const errorData = dynamicData('error');
const dateData = dynamicData('date');
const promiseData = dynamicData('promise');

describe.each(stringData)('isString', (valueTest, type, expected) => {
  test(`returns ${expected} when given ${type}`, () => {
    expect(isString(valueTest)).toBe(expected);
  });
});

describe.each(objectData)('isObject', (valueTest, type, expected) => {
  test(`returns ${expected} when given ${type}`, () => {
    expect(isObject(valueTest)).toBe(expected);
  });
});

describe.each(arrayData)('isArray', (valueTest, type, expected) => {
  test(`returns ${expected} when given ${type}`, () => {
    expect(isArray(valueTest)).toBe(expected);
  });
});

describe.each(numberData)('isNumber', (valueTest, type, expected) => {
  test(`returns ${expected} when given ${type}`, () => {
    expect(isNumber(valueTest)).toBe(expected);
  });
});

describe.each(functionData)('isFunction', (valueTest, type, expected) => {
  test(`returns ${expected} when given ${type}`, () => {
    expect(isFunction(valueTest)).toBe(expected);
  });
});

describe.each(nullData)('isNull', (valueTest, type, expected) => {
  test(`returns ${expected} when given ${type}`, () => {
    expect(isNull(valueTest)).toBe(expected);
  });
});

describe.each(undefinedData)('isUndefined', (valueTest, type, expected) => {
  test(`returns ${expected} when given ${type}`, () => {
    expect(isUndefined(valueTest)).toBe(expected);
  });
});

describe.each(booleanData)('isBoolean', (valueTest, type, expected) => {
  test(`returns ${expected} when given ${type}`, () => {
    expect(isBoolean(valueTest)).toBe(expected);
  });
});

describe.each(errorData)('isError', (valueTest, type, expected) => {
  test(`returns ${expected} when given ${type}`, () => {
    expect(isError(valueTest)).toBe(expected);
  });
});

describe.each(dateData)('isDate', (valueTest, type, expected) => {
  test(`returns ${expected} when given ${type}`, () => {
    expect(isDate(valueTest)).toBe(expected);
  });
});

describe.each(promiseData)('isPromise', (valueTest, type, expected) => {
  test(`returns ${expected} when given ${type}`, () => {
    expect(isPromise(valueTest)).toBe(expected);
  });
});
