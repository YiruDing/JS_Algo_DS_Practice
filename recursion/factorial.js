function factorial(num){
    
    if(num <= 1){return 1}else{
    return num * factorial(num-1)}
   
}

// solution:
function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
 }