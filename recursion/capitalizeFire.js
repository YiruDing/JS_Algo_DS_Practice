
  // solution:
function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    //  .slice(0,-1)
    // e.g.["apple", "banana", "pear"]
    // --> ["apple", "banana"]
    res.push(array.slice(array.length-1)[0].toUpperCase());
    // e.g.["apple", "banana"]
    // --> ["banana"]
    // .slice(2)[0]
    // i.e. 'banana'[0] --> 'B'
//Mar 10:
    // ??But how abour "pear"??
    
    return res;
  }

//   XXX
function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!
    let result = [];
    let currentStr = arr[0]
    let innerStr = ''
    for(let i = 0; i < currentStr.length; i++){
        innerStr += currentStr[i].toUpperCase()
      }
      result.push(innerStr)
    let newArr = arr.slice(1)
    return result.push(capitalizeWords (newArr))
  }
  
  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']