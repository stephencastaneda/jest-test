function sum(a, b) {
  if (Number.isInteger(a) || Number.isInteger(b)) {
    return a + b
  } else if (String(true) === a || String(true) === b ) {
      throw new NoStringsError('This is a string! Use a number instead!')
  } else if (Boolean(true) === a || Boolean(true) === b) {
    throw new NoBooleansError('This is a boolean! Use a number instead!')
    } else if (arguments.length < 1) {
      throw new TooManyArgumentsError('Whoops! You are missing a number')
    }
  } 

module.exports = sum

