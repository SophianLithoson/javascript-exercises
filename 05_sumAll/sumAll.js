const sumAll = function(firstInt, lastInt) {
    if (firstInt===NaN || lastInt===NaN || firstInt < 0 || lastInt < 0)
        return 'ERROR';

    if (firstInt > lastInt) {
        let x = lastInt;
        firstInt = lastInt;
        lastInt = x;
    }

    for (i = firstInt; i < lastInt; i++)
        result += i;

    return result;
};

// Do not edit below this line
module.exports = sumAll;
