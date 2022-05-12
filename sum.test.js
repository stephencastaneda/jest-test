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


  test('it should throw error if string passed', () => {
    expect(() => {
      sum(1, '2').toThrowError('This is a string! Use a number instead!');
  });
});


  test('it should throw error if boolean passed', () => {
    expect(() => {
      sum(true, 2).toThrowError('This is a boolean! Use a number instead!');
  });
});


  test('it should throw error if missing a parameter', () => {

   () => expect(sum(1, 2)).toThrowError(NotEnoughArguementsError)
  
});


describe("exception test", () => {
  it.each([
    [true, 0, 'This is not a number!'],
    [{}, -2, 'This is not a number!'],
    [[], 2, 'This is not a number!'],
  ])(
    `should return proper result when passed arguments are: %i, %i`,
    (a, b, result) => {
      expect(sum(a, b)).toEqual(result);
    }
  );
});



// describe('object exception test', () => {
//   test('it should throw error if string passed', () => {
//     expect(() => sum({}, 2)).toThrowError('This is not a number!');
//   });
// })

// describe('array exception test', () => {
//   test('it should throw error if string passed', () => {
//     expect(() => sum([], 2)).toThrowError('This is not a number!');
//   });
// })
