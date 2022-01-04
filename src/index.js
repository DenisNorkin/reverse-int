module.exports = function reverse (n) {
  let str = '';
  if (Math.sign(n) === -1) {
    str = -n + '';
  } else {
    str = n + '';
  }
  return +str.split('').reverse().join('');
}