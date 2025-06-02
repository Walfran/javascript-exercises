function fibonacci(num){
    // checks if input is intiger, if not, parses it.
    let counter = num; 
    if (typeof num !== 'number'){
        counter = parseInt(num)
    } else {
        counter = num;
    }
    if (counter < 0) return "OOPS";
    if (counter == 0) return 0;

    let array = [0, 1];
    for (let i = 2; i <= counter; i++){
        array.push(array[i - 1] + array[i - 2]);
    }
    return array[counter];
}

// Do not edit below this line
module.exports = fibonacci;


