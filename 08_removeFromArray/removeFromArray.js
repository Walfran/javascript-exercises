const removeFromArray = function(arr, ...valuesToRemove) {
    return arr.filter(item => !valuesToRemove.includes(item));
}

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;