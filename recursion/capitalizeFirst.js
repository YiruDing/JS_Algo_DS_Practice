// solution:
function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    // I don't get it...
    // Then the order would be opposite!
    // [a,b,c]--> [c,b,a]
    // ...??
    return res;
  }

//   XXX
function capitalizeFirst (arr) {
    let result = []; 
    if(arr.lenghth === 0){
        return result
    }  
    let currentStr = arr.slice(0,2)
       let newStr =  currentStr[0].toUpperCase() + currentStr.slice(1)
       result.push(newStr) 
   let nextStr = capitalizeFirst(arr.slice(1))
       return  result.push(nextStr) 
  }
  