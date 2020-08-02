 /*
Own input stream*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
var arr=[]
rl.on('line', (input) => {
arr.push(input)
  
}).on('close', () => {
    knap(arr)
    process.exit(0);
    
});
function knap(arr){
    let n=arr[0].split(" ")[0]
    let weight=arr[0].split(" ")[1]
    console.log(n,weight)
    return (arr)
    
}




