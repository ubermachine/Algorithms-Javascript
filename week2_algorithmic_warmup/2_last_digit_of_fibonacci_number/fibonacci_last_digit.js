// by Shivam
//  Last Digit of a Large Fibonacci Number
// F [i] ← (F [i − 1] + F [i − 2]) mod 10
// Task. Given an integer n, find the last digit of the nth Fibonacci number Fn (that is, Fn mod 10).
// Input Format. The input consists of a single integer n.
// Constraints. 0 ≤ n ≤ 107.
// Output Format. Output the last digit of Fn .
// 331
// Output:
// 9
// F331 = 668 996 615 388 005 031 531 000 081 241 745 415 306 766 517 246 774 551 964 595 292 186 469.


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
   
    let arr= Array(n).fill(null);
    
    arr[0]=0
    arr[1]=1
    for(let i=2;i<=n;i++){
        arr[i]=(arr[i-1]+arr[i-2])%10
    }
    return arr[n]
    
}

module.exports = fib;
