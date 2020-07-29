// by Shivam
// The greatest common divisor GCD(a, b) of two non-negative integers a and b
// (which are not both equal to 0) is the greatest integer d that divides both a and b.
// Your goal in this problem is to implement the Euclidean algorithm for computing
// the greatest common divisor.
// Efficient algorithm for computing the greatest common divisor is an important
// basic primitive of commonly used cryptographic algorithms like RSA.
// Problem Description
// Task. Given two integers a and b, find their greatest common divisor.
// Input Format. The two integers a, b are given in the same line separated by space.
// Constraints. 1 ≤ a, b ≤ 2 · 109 .
// Output Format. Output GCD(a, b).
// Input:
// 28851538 1183019
// Output:
// 17657
//whats happening behind hood assusme input =10,4 gives 10%4=2 then=> 4,2=0 then 2%0 breaks recursion hence ans 2.
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

       console.log(lcm(a,b))
        process.exit();
    }
}
function lcm(a,b){
    return (a*b)/gcd(a,b)
}
function gcd(a, b) {
    if(b==0) return a
    
    return gcd(b,a%b)
}

module.exports = gcd;
 
