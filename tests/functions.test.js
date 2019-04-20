/* eslint-disable */
const {
  isString,
  isObject,
  isArray,
  isNumber,
  isFunction,
  isNull
} = require('../functions');
const { dynamicData } = require('./data');

const stringData = dynamicData('string');
const objectData = dynamicData('object');
const arrayData = dynamicData('array');
const numberData = dynamicData('number');
const functionData = dynamicData('function');
const nullData = dynamicData('null');

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
