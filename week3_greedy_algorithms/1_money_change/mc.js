// Money Change
// Problem Introduction
// In this problem, you will design and implement an elementary greedy algorithm
// used by cashiers all over the world millions of times per day.
// Problem Description
// Task. The goal in this problem is to find the minimum number of coins needed to change the input value
// (an integer) into coins with denominations 1, 5, and 10.
// Input Format. The input consists of a single integer m.
// Constraints. 1 ≤ m ≤ 103.
// Output Format. Output the minimum number of coins with denominations 1, 5, 10 that changes m.
// Sample 1.
// Input:
// 2
// Output:
// 2
// 2 = 1 + 1.
// Sample 2.
// Input:
// 28
// Output:
// 6

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
            const n = parseInt(line.toString().split(' ')[0], 10);
      

    console.log(fib(n));
    process.exit();
}

function fib(n) {
   let c=0;
   while(n>0){
       if(n>=10){
           n-=10
       }
    else if (n>=5){
        n-=5
    } else if (n>=1){
           n-=1
           }
        c++
}
    return c
}

module.exports = fib;
 
