 /*
Own input stream*/
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
let arr=[]
rl.on('line', (input) => {
    if(input!='') arr.push(input)
  
}).on('close', () => {
    console.log(minfill(arr))
    process.exit(0);
    
});
function minfill(arr){
return (arr>=2&&arr%2==0?"YES":"NO")
    
    
}


module.exports=(minfill)

