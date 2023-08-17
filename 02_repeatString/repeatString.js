const repeatString = function(phrase, numRepetitions) {
    if (numRepetitions < 0) {
        return 'ERROR';
    }
    
    let result = "";

    for(let i = 0; i < numRepetitions; i++) {
        result += phrase;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
