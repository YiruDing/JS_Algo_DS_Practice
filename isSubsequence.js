// isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    //if (i === str1.length) could avoit forever loop
    // You can also do "if (i === str1.length -1 ) return true;"
    j++;
  }
  return false;
}
// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  //Check each and every letter
  return isSubsequence(str1, str2.slice(1));
  //0302
  //line21 is to get rid of the space and start to compare with the second word after finishing the prerior one...
  
  //0227 note:
  //isSubsequence(str1, str2.slice(1)) ...
  //?????
  //check another possible str???
  // ??? What's the difference between the first and second "str2.slice(1)"???
}

// XXX
function isSubsequence(str1, str2) {
  if (str1.length >= str2.length) return false;

  let str2Arr = str2.split(' ');

  for (let i = 0; i < str2Arr.length; i++) {
    let subStr = str2Arr[i];
    if (subStr.length !== str1.length) {
      continue;
    } else {
      for (let j = 0; j < subStr.length; j++) {
        if (str1[j] !== subStr[j]) {
          return false;
        }
        return true;
      }
    }
  }
}
