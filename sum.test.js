const sum = require('./sum');

test('the returned value should be a number', () => {
  expect(typeof (sum(1,2))).toBe('number');
})

describe("sum function", () => {
  it.each([
    [0, 0, 0],
    [-1, -2, -3],
    [1, 2, 3],
    [99999, 99999, 199998],
  ])(
    `should return proper result when passed arguments are: %i, %i`,
    (a, b, result) => {
      expect(sum(a, b)).toEqual(result);
    }
  );
});

describe('exception test', () => {
  test('it should throw error if non-number', () => {
    expect(() => sum('yup', 2)).toThrowError('This is not a number!');
  });
})

