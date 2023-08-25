const add = function(a,b) {
  return Number(a + b);
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(a,b) {
	return a.reduce((a,b) => a + b, 0);
};

const multiply = function(a,b) {
  return a.reduce((a,b) => a * b, 1);
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0 || a === 1)
    return 1;
  for (let i = a - 1; i >= 1; i--) {
    a *= i;
  }
    
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
