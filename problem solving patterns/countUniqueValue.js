function countUniqueValue(arr){
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j = 1, j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            // Definitely before storing the value!
            arr[i] = arr[j]

        }
    }
    return i + 1
}