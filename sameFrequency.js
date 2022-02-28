function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }

// My solution:
// (Not able to debugger(yet)...) 

// function sameFrequency(num1,num2){
//     const arr1 = String(num1).split('');
//     const arr2 = String(num2).split('');
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let count = {};
//     for(let i = 0; i < arr1.length; i++ ){
//         count[i]? count[i]++ : count[i] = 1;
//     }
//       for(let j = 0; j < arr2.length; j++ ){
//         count[j] = count[j]-- : return false;
//     }
//   }
  