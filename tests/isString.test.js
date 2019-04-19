/* eslint-disable */
const { isString } = require('../functions');

describe('test isString', () => {
  const str = 'this is a string';
  const fn = () => 'hello world';
  const arr = [1, 2, 3];
  const emptyArr = [];

  test('given a string should return true', () => {
    expect(isString(str)).toEqual(true);
  });

  test('given a arr should return false', () => {
    expect(isString(arr)).toEqual(false);
  });

  test('given a empty array should return false', () => {
    expect(isString(emptyArr)).toEqual(false);
  });

  test('given a null should return false', () => {
    expect(isString(null)).toEqual(false);
  });

  test('given a undefined should return false', () => {
    expect(isString(undefined)).toEqual(false);
  });

  test('given number should return false', () => {
    expect(isString(1234)).toEqual(false);
  });

  test('given boolean should return false', () => {
    expect(isString(true)).toEqual(false);
  });

  test('should given object return false', () => {
    expect(isString({ id: null })).toEqual(false);
  });

  test('given a function should return false', () => {
    expect(isString(fn)).toEqual(false);
  });
});
