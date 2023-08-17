const sumAll = function(firstInt, lastInt) {
    if (firstInt===NaN || lastInt===NaN || firstInt < 0 || lastInt < 0)
        return 'ERROR';

    let result;
    let smallestInt = (firstInt < lastInt) ? firstInt : lastInt;
    let largestInt = (firstInt < lastInt) ? lastInt : firstInt;
    
        
    for (i = smallestInt; i <= largestInt; i++)
        result += i;

    return result;
};

// Do not edit below this line
module.exports = sumAll;
