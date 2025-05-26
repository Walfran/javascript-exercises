const sumAll = function(a, b) {
    // Check if a and b are numbers and integers
    if (
        typeof a !== 'number' || typeof b !== 'number' || 
        !Number.isInteger(a) || !Number.isInteger(b) || 
        a < 0 || b < 0
    ) {
        return "ERROR";
    }

    // Make sure a is the smaller number
    const start = Math.min(a, b);
    const end = Math.max(a, b);

    let range = [];
    for (let i = start; i <= end; i++){
        range.push(i);
    }

    const sum = range.reduce((acc, num) => acc + BigInt(num), 0n);

    return sum <= Number.MAX_SAFE_INTEGER ? Number(sum) : sum;
};

console.log(sumAll(1, 10))

// Do not edit below this line
module.exports = sumAll;