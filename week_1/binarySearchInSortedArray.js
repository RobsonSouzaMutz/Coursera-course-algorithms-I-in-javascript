const binarySearchInSortedArray = (number,arr)=>{

	let idx = 0, hi = arr.length-1;

	while(idx <= hi){

		//first interation mid =  3  (0+(6-0)/2)
		//second interation mid = 5 (4+(6-4)/2)
		// found number 40
		let mid = idx + (hi-idx) /2;


		if(number < arr[mid]){

			hi = mid -1;

		}else if(number > arr[mid]){

			//mid = 3+1
			idx = mid +1;

		}else{

			return console.log(arr[mid]);
		}


	} 

	return console.log("Not Found");

}

binarySearchInSortedArray(40,[1,10,20,30,40,50,70])
