function sum(x = 1, y = 2) {
  return x + y;
}
function mul(x = 1, y = 2) {
  return x * y;
}
function sub(x = 1, y = 2) {
  return x - y;
}
function div(x = 1, y = 2) {
  return x / y;
}
module.exports = { sum, mul, sub, div };

// second way with the type module
// export {sum,mul,sub,div};
