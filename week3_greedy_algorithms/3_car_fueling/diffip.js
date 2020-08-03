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

    let fills=0
    let dt=0
    let i=0   
    let meter=dset[i]
    while(dt<d&&i<n){
        let kmleft=mileage
        while(kmleft){
            if(Math.abs(dt-meter)+kmleft>=d){
                console.log('ho',fills,dt,meter)
                break
            }
            if(kmleft<Math.abs(dt-meter)){
                console.log('ho over',fills,dt,meter)
                return -1
                break //just added for assurity
            }else{
                  if(kmleft>Math.abs(dt-meter)&&i<n-1){
                      meter=dset[++i] 
                      console.log(i,n)
                  }
                  
                console.log('filleed',fills,dt,meter)
                dt=meter
                if(dt+mileage<=d){fills++}
                meter=dset[++i]
                 kmleft=0
            }
        }
        
        
    }
    
    return fills
    
}


module.exports=(minfill)

