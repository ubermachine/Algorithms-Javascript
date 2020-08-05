
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
    const arr = line.toString().split(' ').slice(1).map(Number);

    rl.once('line', line => {
        const keys = line.toString().split(' ').slice(1).map(Number);
        for (let key of keys) {
            process.stdout.write(binarySearch(arr, key) + ' ');
        }
        process.stdout.write('\n');
        process.exit();
    })
});
function binarySearch(arr = [], key) {
    function search(arr,low,high,key){
    
    if(low>high) return -1
    let mid= high - Math.floor((high-low)/2)
    if (arr[mid]==key) return mid
    else if(key>arr[mid]) return search(arr,mid+1,high,key)
    else return search(arr,low,mid-1,key)
            
    
} return search(arr,0,arr.length-1,key)
}
module.exports = binarySearch;
