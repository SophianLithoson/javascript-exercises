const reverseString = function(phrase) {
    let phraseAsArray = Array.from(phrase);
    let backwardsPhrase = '';

    while(phraseAsArray.length) {
        backwardsPhrase += phrase.pop();
    }
};

// Do not edit below this line
module.exports = reverseString;
