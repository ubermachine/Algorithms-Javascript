// Maximum Pairwise Product Problem
// Find the maximum product of two distinct num-
// bers in a sequence of non-negative integers.
// 
// Input format. The first line contains an integer n. The next line contains
// n non-negative integers a1 , . . . , an (separated by spaces).
// Output format. The maximum pairwise product.
// Constraints. 2 ≤ n ≤ 2 · 105; 0 ≤ a1 , . . . , an ≤ 2 · 105 .

//Input 7 5 14 2 8 8 10 1 2 3
//output 140

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);

    console.log(max(arr));
    process.exit();
}

function max(arr) {
   arr.sort((a,b)=>{
       return a-b
   })
   return (arr[arr.length-1]*arr[arr.length-2])
   
}

module.exports = max;
