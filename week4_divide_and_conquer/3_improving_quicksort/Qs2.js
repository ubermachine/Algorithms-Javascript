const readline = require('readline');

process.stdin.setEncoding('utf8');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let n,
  a = [];

function readLine(line) {
  if (n === undefined) {
    n = parseInt(line);
    return;
  }
  a = line.split(' ').map(x => {
    return parseInt(x);
  });
  main(n, a);
  process.exit();
}
function main(n,arr){
    
   let nums=arr.map(a=>a=parseInt(a))
   
   quicksort(nums,0,nums.length-1)
   console.log(...nums)
     
}
function partition(A,l,h){
    let pivot=A[h]
   
    let i=l
    for(let j=l;j<=h;j++){  
        if(A[j]<pivot) {
            
            [A[i],A[j]]=[A[j],A[i]]
           
            i++
        }
    
         
    }[A[i],A[h]]=[A[h],A[i]]
  
    return i
}
function quicksort(A,l,h){
   
    if(l<h){
       let p= partition(A,l,h)
       quicksort(A,l,p-1)
      quicksort(A,p+1,h)
    } 
    
}

module.exports=(main)

 
