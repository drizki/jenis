const fn = () => 1 + 2;
const promise = new Promise(resolve => setTimeout(resolve, 3000));

const defaultDataTest = [
  [[1, 2, 3], 'array', false],
  [{}, 'object', false],
  [true, 'boolean', false],
  ['hello world', 'string', false],
  [123, 'number', false],
  [fn, 'function', false],
  [new Date(), 'date', false],
  [new Error('error'), 'error', false],
  [undefined, 'undefined', false],
  [null, 'null', false],
  [promise, 'promise', false],
  [/a/g, 'regexp', false],
  [Symbol(), 'symbol', false]
];

const dynamicData = type => {
  return defaultDataTest.map(i => {
    const newOne = [...i];
    if (newOne[1] === type) {
      newOne[2] = true;
    }
    return newOne;
  });
};

module.exports = { dynamicData };
