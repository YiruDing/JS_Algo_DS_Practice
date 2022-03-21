function maxSubArraySum(arr,num){
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
    for(let i = 0; i < num ; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
// Store the value so that we can did some modification while moving right...
    for(let j = num; j < arr.length; j++){
        tempSum = tempSum - arr[j - num] + arr[j]
        maxSum = Math.max(maxSum,tempSum)
        //not to return here!!
        //You gotta reassign the value
    }
    return maxSum
}

// XXX
// for(let j = 0; j < arr.length; j++){
//     tempSum = tempSum - arr[j] + arr[num + j]
//     return Math.max(tempSum,maxSum)
// }