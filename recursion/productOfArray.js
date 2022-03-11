function productOfArray(arr){
    let result = 1
    if(arr.length === 1)return arr[0]
        let newArr = arr.slice(1)
        return result * arr[0] * productOfArray(newArr)
    
}

// solution:
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}