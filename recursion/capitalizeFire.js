// solution:
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  //  array.slice(0,-1)
  // e.g.["apple", "banana", "pear"] --> ["apple", "banana"]
  //  res = capitalizeWords(["apple", "banana"])
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  //  array.slice(2)[0]
  // e.g.["apple", "banana", "pear"] --> ["pear"] ;'"pear"'[0] --> 'P'
  // CapitalizeWords(["apple", "banana"]).push(["Pear"])
  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // res2 = capitalizeWords(array.slice(0, -1))
  // CapitalizeWords(["apple"]).push([["Banana"])

  return res;
}

//   XXX
function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];
  let currentStr = arr[0];
  let innerStr = '';
  for (let i = 0; i < currentStr.length; i++) {
    innerStr += currentStr[i].toUpperCase();
  }
  result.push(innerStr);
  let newArr = arr.slice(1);
  return result.push(capitalizeWords(newArr));
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
