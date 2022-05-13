const isNumber = (n) => typeof n === 'number'
const sum = (...args) => args.every(isNumber) ? args.reduce((total,n)=> total + n, 0): 0



module.exports = sum

