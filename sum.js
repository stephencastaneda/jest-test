function sum(a, b) {
 if (isNaN(a, b)) {
   throw new Error('This is not a number!')
 }
 return a + b
} 

module.exports = sum

