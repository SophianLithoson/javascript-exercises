const palindromes = function (text) {
    let textNoPuncs = text.replace(/[\.,?!]/g, "");
    let textArray = Array.from(textNoPuncs.toUpperCase());
        
    for (let i=0, j=(textArray.length - 1); i <= j; i++, j--) {
        if (textArray[i] === textArray[j])
            continue;
        else
            return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
