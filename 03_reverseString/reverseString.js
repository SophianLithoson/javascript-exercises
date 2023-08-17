const reverseString = function(phrase) {
    let phraseAsArray = Array.from(phrase);
    let backwardsPhrase = '';

    while(phraseAsArray.length) {
        backwardsPhrase += phraseAsArray.pop();
    }

    return backwardsPhrase;
};

// Do not edit below this line
module.exports = reverseString;
