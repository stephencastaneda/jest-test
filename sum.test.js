const sum = require('./sum');

describe("sum function", () => {

  it("given all integers returns the sum", () => {
    expect(sum(2, 5)).toBe(7)
  })

  it("if a string is passed, an error is thrown", () => {
    expect(() => sum(1, 'test')).toThrowError('Give me a number! This is a string!')
  })

  it("if a boolean is passed, an error is thrown", () => {
    expect(() => sum(1, true)).toThrowError('Give me a number! This is a boolean!')
  })

  it("if an object is passed, an error is thrown", () => {
    expect(() => sum({}, 2)).toThrowError('Give me a number! This is an object!')
  })

  it("must pass at least two numbers", () => {
    expect(() => sum(1)).toThrowError('You must pass two numbers')
  })

});