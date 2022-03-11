// XXX
function someRecursive(arr, callback) {
  for (let i = 0; i < arr.lenghth; i++) {
    if (callback(arr[i])) {
      return true;
    }
  }
  return false;
}

// solution:
function someRecursive(array, callback) {
  if (array.length === 0) return false;
  if (callback(array[0])) return true;
  return someRecursive(array.slice(1), callback);
}
