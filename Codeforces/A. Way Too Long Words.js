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
    if(input!=='') arr.push(input)
  
}).on('close', () => {
    console.log(minfill(arr))
    process.exit(0);
    
});
function minfill(arr){
     
let n=arr[0];
for(let i=1;i<=n;i++){
 
    if(arr[i].length>10){
        console.log(arr[i][0]+String(arr[i].length-2)+arr[i][arr[i].length-1])
    }else{
        console.log(arr[i])
    }
}return ""
}


module.exports=(minfill)

