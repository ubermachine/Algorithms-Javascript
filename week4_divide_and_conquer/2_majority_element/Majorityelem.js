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
    console.log(maxfill(arr))
    process.exit(0);
    
});
function maxfill(arr){
   let brr={}
   let n= arr[0],nums=arr[1].split(" ")
   let c=1,max=0,digit=0
   for(let i of nums){
       if(!brr[i]){
           brr[i]=c
       }else{
           brr[i]+=c
       if(brr[i]>max)max=brr[i]
           digit=i
       }
   }
   if(max>n/2)return digit
   return 0
}

module.exports=(maxfill)

 
