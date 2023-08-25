const fibonacci = function(num) {
    if (typeof(num) === String)
        num = Number(num);

    if (num < 1)
        return "OOPS";

    let stack = [0, 1];

    for (i=2; i <= num; i++) {
        stack.push(stack[0] + stack [1]);
        stack.shift();
    }

    return stack[1];
};

// Do not edit below this line
module.exports = fibonacci;
