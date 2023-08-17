function removeFromArray() {
    let args = [];
    let inputArray = [];
    let currentElement;
    let currentIndex = 0;

    inputArray = arguments[0];

    for (let i=1; i < arguments.length; ++i)
        args[i] = arguments[i];

    for (let i=0; i < args.length; ++i) {
        currentElement = args[i];
        currentIndex = inputArray.indexOf(currentElement);
        if (currentIndex > 0)
            inputArray.splice(currentIndex, 1);
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;

/*
get all args after the first and put them in an array
loop through the elements of the arg array
    if current arg array element exists in inputArray AND is correct type
        splice input array at that index
    else
        iterate to next arg element
*/
