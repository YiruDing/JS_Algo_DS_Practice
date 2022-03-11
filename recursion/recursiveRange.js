function recursiveRange(num){
    if(num === 0)return 0
    if(num === 1)return 1
    return num + recursiveRange(num-1)  
}

// solution:
function recursiveRange(x){
    if (x === 0 ) return 0;
    return x + recursiveRange(x-1);
 }