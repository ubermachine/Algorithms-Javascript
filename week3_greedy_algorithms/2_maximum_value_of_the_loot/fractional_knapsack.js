

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}
 
function max(count, capacity, values, weights) {
    let n= values.length
    for(let i in values){
      
        values[i]=[values[i],weights[i]]
    }values.sort((a,b)=>{
        return (b[0]/b[1]-a[0]/a[1])
    })
    let sum=0
for(let i of values){
    if(capacity>=i[1]){
        capacity-=i[i]
        sum+=i[0]
    }else{
       
        sum+=i[0]*(capacity/i[1])
        break
        
    }
}return sum.toFixed(4)
}

module.exports = max;
