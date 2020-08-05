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
    
arr.push(input)
  
}).on('close', () => {
    console.log(minfill(arr))
    process.exit(0);
    
});
function minfill(arr){
    let dist=arr[0],miles=arr[1],n=arr[2];
    stations=[...arr[3].split(' '),dist]//.map(a=>Number(a))
   
let refill=0, limit = miles,dt=0,current=0;
   
    while(current<=n){
        //console.log(current,"totak")
        if((Math.abs(stations[current]-stations[current+1])>limit)||stations[0]>limit) return -1
        if(Math.abs(dt-stations[current])<=limit){//console.log(current,"pass",stations[current],"dt",dt)
            current++
        }else{
            dt=stations[current-1]
            
            refill++
           // console.log(current,"larger",dt)
        }
  }
    return refill
}

module.exports=(minfill)

