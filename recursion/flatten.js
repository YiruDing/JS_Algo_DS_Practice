// XXX
function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.lengh; i++) {
    let currentValue = arr[i];

    if (Array.isArray(currnetValue)) {
      result.concat(flatten(currentValue));
      // XXX
    } else {
      result.push(currentValue);
    }
  }
  return result;
}

// solution:
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}
