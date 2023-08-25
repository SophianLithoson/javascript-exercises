const palindromes = function (text) {
    let textNoPuncs = text.replace(/[\.,?!]/g, "");
    let textArray = Array.from(textNoPuncs.toUpperCase());
        
    for (let i=0, let j=(textArray.length - 1); i <= j; i++, j--) {
        if (textArray[i] === textArray[j])
            continue;
        else
            return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
