function binarySearch(array,value){
  let min = 0;
  let max = array.length - 1;

  while(min < max){
      let middle = Math.floor(min + max) / 2;
      let currentElement = array[middle];

      if(currentElement < val){
          min = middle + 1;
      }else if(currentElement > val){
          max = middle - 1;
      }else{
          return middle;
      }
  }
  return -1;
}