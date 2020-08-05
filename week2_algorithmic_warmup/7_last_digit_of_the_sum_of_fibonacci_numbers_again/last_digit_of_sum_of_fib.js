??under o==progress
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
            const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

    console.log(fib(n,m));
    process.exit();
}

function fib(n,m) {
    let arr=[]

    sum=0

    for(let i=0;i<=m%60;i++){
        if(i==0||i==1){
            arr[0]=0
            arr[1]=1 
        }else{
        arr[i]=(arr[i-1]+arr[i-2])
            
        }
        if(i>=n){
        
            sum+=arr[i]
        }
        
    }
    
    return (sum)%10
    
}

module.exports = fib;
