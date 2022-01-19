class Node{


	constructor(item,next){

		this.item = item;
		this.next = null;
		
	}

}


class Stack{

constructor(){

	this.top = null;
	this.size = 0;
}
	
	push(item){

		let node = new Node(item);

		node.next = this.top;

		this.top = node;
		this.size++;
	}

	pop(){
		let saved;
		if(this.size === 0){

			return

		}else{

		saved = this.top.item;
		let temp = this.top;

		this.top = this.top.next;

		temp = null;
		this.size--;

		}

		return console.log(saved,"deleted")
	}



	isEmpty(){

		return console.log((this.size < 1) ? true : false);
	}



	displayAllItem(){

		if(this.size !==0){

			let current = this.top;

			while(current !== null){

				console.log(current.item);

				current = current.next;
		
		}	

		}else{

			console.log("Nothing in the Stack")
		}
	}



	displayStackSize(){


		return console.log("Total size: ",this.size);
	}



	

}

obj = new Stack();

obj.push("a")
obj.push("b")
obj.displayAllItem();
//obj.displayStackSize();
obj.isEmpty();
obj.displayStackSize()
obj.pop();
obj.displayAllItem();
console.log("--------------")
obj.displayStackSize()
obj.displayAllItem();


