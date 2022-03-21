function validAnagram(str1,str2){
    if(str1.lenghth !== str2.length){
        return false
    }

    let charCount = {}
  for(let char in str1){
    charCount[char]?  charCount[char]++ : charCount[char] = 1 
  }
  for(let char in str2){
    charCount[char] =  charCount[char]-- : return false
  }
  return charCount === {}
}

validAnagram('','')
validAnagram('car','cat')