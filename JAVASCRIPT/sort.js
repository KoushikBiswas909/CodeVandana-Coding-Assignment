const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

rl.question('Enter numbers separated by spaces: ', (input) => {
    
    const numbers = input.split(' ').map(Number);

    
    const sortedDescending = sortArrayDescending(numbers);

    console.log('Sorted array in descending order:', sortedDescending);
    rl.close();
});
