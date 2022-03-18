function mergeArr(arr1,arr2){
    let result = [];
    while(arr1 || arr2){
        if(arr1[0] > arr2[0] ){
            result.push(arr2[0])
            if( arr2.length >= 2){ 
                let newArr2 = arr2.slice(1)        
                result.push(mergeArr(arr1,newArr2))
            }
        }else if(arr1[0] < arr2[0] ){
                result.push(arr1[0])
                if( arr1.length >= 2){ 
                    let newArr1 = arr1.slice(1)        
                    result.push(mergeArr(newArr1,arr2))
                }
        }
    }
    return result
}

//Solution
// Merges two already sorted arrays
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}
merge([100,200], [1,2,3,5,6])

