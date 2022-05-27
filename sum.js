const isNumber = (n) => typeof n === 'number'
const isString = (s) => typeof s === 'string'
const isBoolean = (b) => typeof b === 'boolean'
const isObject = (o) => typeof o === 'object'


function sum(a, b) {
  if (arguments.length < 2) {
   throw new Error('You must use two numbers!')
  } else if (isString(a) || isString(b)) {
     throw new Error('You must use a number!')
   } else if (isBoolean(a) || isBoolean(b)) {
     throw new Error('You must use a number!')
   } else if (isObject(a) || isObject(b)){
     throw new Error('You must use a number!')
   } else if (isNaN(a) || isNaN(b)) {
     throw new Error('You must use a number!')
   } else if (isNumber(a) || isNumber(b)) {
     return a + b
   } else {
     return 0
   }
 }

 
function sumArray(numbers) {
  if (numbers.every(element => typeof element === 'number')) {
      const reducer = (acc, val) => { return acc + val }
      const initialValue = 0
      return numbers.reduce(reducer, initialValue)
    } else {
      throw new Error ("You must only use numbers!")
    } 
}

module.exports = { sum, sumArray }

