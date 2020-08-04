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
    let d=arr[0],mileage=arr[1],n=arr[2];
    dset=arr[3].split(' ')//.map(a=>Number(a))
let visited=0;
let num_refill=0, curr_refill=0, last_refill = 0;
while(curr_refill<=n){
     last_refill = curr_refill;
      while( (curr_refill <= n-1) && ((dset[curr_refill + 1] - dset[last_refill]) <= d)){
        curr_refill += 1
    if (curr_refill == last_refill)  return -1
    if (curr_refill <= n) num_refill += 1}
  return num_refill
}
}


module.exports=(minfill)

