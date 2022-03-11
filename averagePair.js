//Yaay
function averagePair(arr,average){
    let targetSum = average*2;
    let right = 0;
    let left = arr.length - 1;
    while(right < left){
        if(arr[right] + arr[left] > targetSum){
            left--;
        }else if(arr[right] + arr[left] < targetSum){
            right++;
        }else{
            return true
        }
    }
  return false
}

//Solution
function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }