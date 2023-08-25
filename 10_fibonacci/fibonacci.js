const fibonacci = function(num) {
    if (typeof(num) === String)
        num = Number(num);

    if (num < 1)
        return "OOPS";

    let stack = [0, 1];

    for (i=1, i <= num, i++) {
        stack.pop(stack[0] + stack [1]);
        stack.shift();
    }


};

// Do not edit below this line
module.exports = fibonacci;
