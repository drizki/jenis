/* eslint-disable */
const { isObject } = require('../functions');

describe('test isObject', () => {
  const str = 'this is a string';
  const fn = () => 'hello world';
  const arr = [1, 2, 3];
  const emptyArr = [];

  test('should given object return true', () => {
    expect(isObject({ id: null })).toEqual(true);
  });

  test('given a arr should return false', () => {
    expect(isObject(arr)).toEqual(false);
  });

  test('given a empty array should return false', () => {
    expect(isObject(emptyArr)).toEqual(false);
  });

  test('given a string should return false', () => {
    expect(isObject(str)).toEqual(false);
  });

  test('given a null should return false', () => {
    expect(isObject(null)).toEqual(false);
  });

  test('given a undefined should return false', () => {
    expect(isObject(undefined)).toEqual(false);
  });

  test('given number should return false', () => {
    expect(isObject(1234)).toEqual(false);
  });

  test('given boolean should return false', () => {
    expect(isObject(true)).toEqual(false);
  });

  test('given a function should return false', () => {
    expect(isObject(fn)).toEqual(false);
  });

  test('given a NaN should return false', () => {
    expect(isObject(NaN)).toEqual(false);
  });
});
