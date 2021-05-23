function countTrue(arr) {

var count = 0;
	for(var i=0; i<arr.length; i++){
		if(arr[i] == true){
			count++;
		}
	}
	return count;
}

console.log(countTrue([true, false, false, true, false])) //2
console.log(countTrue([false, false, false, false])) //0
console.log(countTrue([])) //0
console.log(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false])) //8
console.log(countTrue([true, false, true, true, false, false, false, false, false]))  //3
console.log(countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]))  //8
console.log(countTrue([true, false, true, true, true, false, true, true, false, false]))  //6
console.log(countTrue([false, false, false, false, true, false, true, false, true, false, false]))  //3
console.log(countTrue([true, false, false, false, true, false, false, true, false, false, false]))  //3
console.log(countTrue([true, true, false, true, false, false, false, false, true, false]))  //4
console.log(countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]))  //9
console.log(countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]))  //8
console.log(countTrue([true, true, false, false, false, false, true, false, true, true, false, true]))  //6