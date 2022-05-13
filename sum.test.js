const sum = require('./sum');

describe("sum function", () => {

  it("given all integers returns the sum", () => {
    expect(sum(2, 5)).toBe(7)
  })

  it("is variadic", () => {
    expect(sum(2, 5, 13, 47)).toBe(67)
  })

  it("if any argument is not a number return 0", () => {
    expect(sum(2, '')).toBe(0)
  })
});