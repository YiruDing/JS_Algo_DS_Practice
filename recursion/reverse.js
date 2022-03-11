// XXX
function reverse(str){
    if(str.length ===1){return str[0]}
   let newStr = str.slice(0,-1)
  return str[-1] += reverse(newStr)
}

// solution:
function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}