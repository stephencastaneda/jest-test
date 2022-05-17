const isNumber = (n) => typeof n === 'number'
const isString = (s) => typeof s === 'string'
const isBoolean = (b) => typeof b === 'boolean'
const isObject = (o) => typeof o === 'object'

function sum(a, b) {
  if (arguments.length < 2) {
   throw new Error('You must pass two numbers')
  } else if (isString(a) || isString(b)) {
     throw new Error('Give me a number! This is a string!')
   } else if (isBoolean(a) || isBoolean(b)) {
     throw new Error('Give me a number! This is a boolean!')
   } else if (isObject(a) || isObject(b)){
     throw new Error('Give me a number! This is an object!')
   } else if (isNumber(a) || isNumber(b)) {
     return a + b
   } else {
     return 0
   }
 }
 

module.exports = sum

