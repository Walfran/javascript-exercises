const reverseString = function(string) {
    let reversed = '';
    for (let i = string.length - 1; i >= 0; i--){
        reversed += string[i];
    }
    return reversed;
};

console.log(reverseString());

// Do not edit below this line
module.exports = reverseString;
