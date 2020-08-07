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
    if(input!="")arr.push(input.trim())
  
}).on('close', () => {
    console.log(maxfill(arr))
    process.exit(0);
    
});
function maxfill(arr){
    let n=arr[0]
    
    //test case arr=[...Array(400)].map(e=>~~(Math.random()*40000))
   let nums=arr[1].split(" ").map(a=>Number(a)).sort((a,b)=>a-b)
    
    return nums.join(' ')
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
        left= right = partition(A, p, lo, hi)  // note: multiple return values
        quicksort(A, lo, left - 1)
        quicksort(A, right + 1, hi)
    } 
    
}

module.exports=(maxfill)

 
