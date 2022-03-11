function power(num1,num2){
    let result = 1
    if(num2 === 0) return 1;
    for(let i = num2; i >= 1 ; i--){
        result *= num1
    }
    return result
}

// solution:
function power(base, exponent){
    if(exponent === 0) return 1;
    return base * power(base,exponent-1);
}