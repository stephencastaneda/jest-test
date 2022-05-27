const { sum, sumArray } = require('./sum');

describe("sum function", () => {

  it("given all integers returns the sum", () => {
    expect(sum(2, 5)).toBe(7)
  })

  it("if a string is passed, an error is thrown", () => {
    expect(() => sum(1, 'test')).toThrowError('You must use a number!')
  })

  it("if a boolean is passed, an error is thrown", () => {
    expect(() => sum(1, true)).toThrowError('You must use a number!')
  })

  it("if an object is passed, an error is thrown", () => {
    expect(() => sum({}, 2)).toThrowError('You must use a number!')
  })

  it("must pass at least two numbers", () => {
    expect(() => sum(1)).toThrowError('You must use two numbers!')
  })
});

// 2. Instead of listing the inverses every time, just have two exceptions running through the sum check, and do (a,b) and then (b,a)

describe("sum exception test", () => {
  it.each([
    [true, 0, 'You must use a number!'],
    [{}, -2, 'You must use a number!'],
    ['string', 0, 'You must use a number!'],
    [[], 0, 'You must use a number!'],
    [() => {}, () => {}, 'You must use a number!'],
  ])(
    `should return proper result when passed arguments are: %i, %i`,
    (a, b, result) => {
      expect(() => sum(a, b)).toThrowError(result);
      expect(() => sum(b, a)).toThrowError(result);
    }
  );
});

describe("array function", () => {
  it("returns integers in an array as a sum", () => {
    expect(sumArray([2, 3, 5, 10])).toBe(20)
  })

  it("throw error if non-number in array", () => {
    expect(() => sumArray([2, 'true', 5])).toThrowError("You must only use numbers!")
  })

})

describe("sum array exception test", () => {
  it.each([
    [5, 0, true, 'You must only use numbers!'],
    [{}, -5, 6, 'You must only use numbers!'],
    ['string', 7, 9, 'You must only use numbers!'],
    [[], 15, 14, 'You must only use numbers!'],
    [() => {}, () => {}, 5, 'You must only use numbers!'],
  ])(
    `should return proper result when passed arguments are: %i, %i, %i`,
    (a, b, c, result) => {
      expect(() => sumArray([a, b, c])).toThrowError(result);
      expect(() => sumArray([b, a, c])).toThrowError(result);
      expect(() => sumArray([c, a, b])).toThrowError(result);
    }
  );
});

