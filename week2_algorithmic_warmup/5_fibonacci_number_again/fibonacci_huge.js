/*

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

        console.log(getFibMod(n, m));
        process.exit();
    }
}


function getFibMod(n, m) {
   let arr=[]
   arr[0]=0
   arr[1]=1;

   let f=0
   for(let i=2;i<=n;i++){ 
       arr[i]=(arr[i-1]+arr[i-2])%m
     
       
       
       if(arr[i]==1&&arr[i-1]==1&&arr[i-2]==0&&i>3){
           f=n%(i-2)
           return (arr[f])
           break
       }
       
       
   }if(m==n||m<=2||m>n){
         return arr[n]
     }
    

    

}

module.exports = getFibMod;
