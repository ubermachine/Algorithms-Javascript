// by Shivam

//Task. Given an integer n, find the nth Fibonacci number Fn .
// Input Format. The input consists of a single integer n.
// Constraints. 0 ≤ n ≤ 45.
// Input:
// 10
// Output:
// 55
// F10 = 55.

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
        arr[i]=arr[i-1]+arr[i-2]
    }
    return (arr[n])
    
}

module.exports = fib;
