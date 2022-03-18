function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for(let j = i-1 ; j >=0; j-- ){
            if(currentVal > arr[j]){
                let temp = arr[j];
                arr[j] = currentVal;
                currentVal = temp;
                // Is this the corrst way to swap?
            }
        }
    }
    return arr;
}

// solution:
function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])

// Mar17 haven't figure it out yet...
// 
// outer loop round1(i=1):
//  currentVal = arr[i]a.k.a 1,
//Because j = 0; arr[0] > 1
//So ... arr[1] = arr[0]a.k.a 2; 
// [2,2,9,76,4]
//＊＊＊＊＊＊＊＊＊＊＊＊
//The tricky part is that since  j must >= 0
// How can we swap the number "1" & "2" ???
//when inner loop breaks
//  arr[1] =  currentVal a.k.a 1 
// [2,1,9,76,4] 

// outer loop round2(i=2):
//  currentVal = arr[i]a.k.a 9,
//  cause arr[1] < currentVal inner loop breaks
//  arr[2] =  currentVal a.k.a 9 
// [2,1,9,76,4] 

// outer loop round3(i=3):
//  currentVal = arr[i]a.k.a 76,
//  cause arr[2] < currentVal inner loop breaks
//  arr[3] =  currentVal a.k.a 76 
// [2,1,9,76,4] 

// outer loop round4(i=4):
//  currentVal = arr[i]a.k.a 4,
//  cause arr[3] > currentVal (76 > 4)
// arr[4] =  arr[3] 
// [2,1,9,76,76] 
// inner loop go!
// arr[3] > 4 so arr[3] =  arr[2] 
// [2,1,9,9,76]
// arr[2] > 4 so arr[2] =  arr[1] 
// [2,1,1,9,76]
//  cause arr[1] < currentVal(1 < 4) j = 1 inner loop breaks
//  arr[2] =  currentVal a.k.a 4 
// [2,1,4,9,76]
// ...That's it???



