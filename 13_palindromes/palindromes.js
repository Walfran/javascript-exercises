function palindromes(str){
    let cleanedText = str.replace(/[^a-z0-9]/gi, "").toLowerCase(); // removes punctuation, spaces, etc.
    let reversedText = cleanedText.split("").reverse().join("");
    return cleanedText === reversedText;
}

// Do not edit below this line
module.exports = palindromes;
