function collectOddValues(arr){
    let result = []
    if(arr.lenghth === 0){return result}

    if(arr[0] % 2){
        result.push(arr[0])
    }

    let newArr = arr.slice(1)
    return result.concate(collectOddValues(newArr))

}

// solution:
function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])
                                        
                                                                
                                            