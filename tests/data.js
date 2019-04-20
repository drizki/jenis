const x = () => 1 + 2;

const defaultDataTest = [
  [[1, 2, 3], 'array', false],
  [{}, 'object', false],
  [true, 'boolean', false],
  ['hello world', 'string', false],
  [123, 'number', false],
  [x, 'function', false],
  [new Date(), 'date', false],
  [new Error('error'), 'error', false],
  [undefined, 'undefined', false],
  [null, 'null', false]
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
