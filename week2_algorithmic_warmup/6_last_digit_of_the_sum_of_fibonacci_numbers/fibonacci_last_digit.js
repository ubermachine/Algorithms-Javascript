/*
Pisano period ie recurring fibo seq using mod- ihave used 011 here but 01 is enough for pattern 
Fibonacci Number Again Problem
Compute the n-th Fibonacci number modulo m.
Input: Integers 0 ≤ n ≤ 1018 and
2 ≤ m ≤ 105 .
Output: n-th Fibonacci modulo m.
Problem Description
Task. Given two integers n and m, output Fn mod m (that is, the remainder of Fn when divided by m).
Input Format. The input consists of two integers n and m given on the same line (separated by a space).
Constraints. 1 ≤ n ≤ 1014 , 2 ≤ m ≤ 103.
Output Format. Output Fn mod m.
Sample 1.
Input:
239 1000
Output:
161
F239 mod 1 000 = 39 679 027 332 006 820 581 608 740 953 902 289 877 834 488 152 161 (mod 1 000) = 161.*/


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getFibMod(n));
        process.exit();
    }
}


function getFibMod(n) {
        if(n<2){
        return n
    }
   let a=0,arr=[],f=0
  , b=1;
   arr[0]=0
arr[1]=1
   let size= n % 60,sum=1
   for(let i=2;i<=size;i++){ 
       let c=(a+b)%10
       
       a=b
       b=c
       sum+=c
       f = sum%10;
       
       
   }
         
    return f

    

}

module.exports = getFibMod;
