// The least common multiple of two positive integers a and b is the least positive
// integer m that is divisible by both a and b.
// Problem Description
// Task. Given two integers a and b, find their least common multiple.
// Input Format. The two integers a and b are given in the same line separated by space.
// Constraints. 1 ≤ a, b ≤ 107 .
// Output Format. Output the least common multiple of a and b.
// Sample 1.
// Input:
// 68
// Output:
// 24

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);
console.log(gcd(a,b))
       
        process.exit();
    }
}

function gcd(a, b) {
    if(b==0) return a
    
    return gcd(b,a%b)
}

module.exports = gcd;
