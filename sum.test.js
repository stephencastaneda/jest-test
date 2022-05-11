const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1,2)).toBe(3);
})

test('the returned value should be a number', () => {
  expect(typeof (sum(1,2))).toBe('number');
})

describe('exception test', () => {
  test('it should throw error if non-number', () => {
    expect(() => sum('yup', 2)).toThrowError('This is not a number!');
  });
})

