// solution:
function nestedEvenSum (obj, sum=0) {
    for (var key in obj) {
        if (typeof obj[key] === 'object'){
            sum += nestedEvenSum(obj[key]);
        } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key];
        }
    }
    return sum;
}

// XXX
function nestedEvenSum (obj) {
    let sum = 0
    if(typeof(obj)!== 'object'){
        return sum
    }
    for(let key in obj){
        if(typeof(obj[key] === 'object')){
            sum += 1+nestedEvenSum (obj[key])
        }
    }
    return sum
  }
  