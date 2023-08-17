const repeatString = function(phrase, numRepetitions) {
    let result = "";
    for(let i = 0; i < numRepetitions; i++) {
        result += phrase;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
