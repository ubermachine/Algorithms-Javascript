
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
//18
function fib(n) {
   let c=0;
   let f=n
   for(i=0;i<=n;i++){
       
       if(f>=10){
           c++
           f-=10
           
       }
           else if (f>=5){
               c++
               f-=5
               
           } else if (f>=1){
               
                   c++
           f-=1
               
           }
   }              
    return c
}

module.exports = fib;
 
