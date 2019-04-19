/* eslint-disable */
const { isArray } = require('../functions');

describe('test isArray', () => {
  const str = 'this is a string';
  const fn = () => 'hello world';
  const arr = [1, 2, 3];
  const emptyArr = [];

  test('given a arr should return true', () => {
    expect(isArray(arr)).toEqual(true);
  });

  test('given a empty array should return true', () => {
    expect(isArray(emptyArr)).toEqual(true);
  });

  test('given a string should return false', () => {
    expect(isArray(str)).toEqual(false);
  });

  test('given a null should return false', () => {
    expect(isArray(null)).toEqual(false);
  });

  test('given a undefined should return false', () => {
    expect(isArray(undefined)).toEqual(false);
  });

  test('given number should return false', () => {
    expect(isArray(1234)).toEqual(false);
  });

  test('given boolean should return false', () => {
    expect(isArray(true)).toEqual(false);
  });

  test('should given object return false', () => {
    expect(isArray({ id: null })).toEqual(false);
  });

  test('given a function should return false', () => {
    expect(isArray(fn)).toEqual(false);
  });

  test('given a NaN should return false', () => {
    expect(isArray(NaN)).toEqual(false);
  });
});
