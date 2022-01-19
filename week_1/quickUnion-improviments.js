
class QuickUnion{
	
	
	
		constructor(){
			
			
				this.id = [];
				this.sz = [];
				
		}
		
		quickUnionUF(N){
			
			for(let i = 0; i < N; i++){
				
				
					this.id[i] = i;
			}
				
		}
		
		root(idx){
			
			
			while(idx != this.id[idx]){
				
				idx = this.id[idx];
					
			}
			
			return idx;
			
		
			}
			

	 doUnion(p, q){
		 
			
		let pRoot = this.root(p);
		let qRoot = this.root(q);
		
		if(pRoot === qRoot){
			
			
				return;
			
		}
		
		if(this.sz[pRoot] <= this.sz[qRoot])
		{
			
				this.id[pRoot] = qRoot;
				this.sz[qRoot]+= this.sz[pRoot];
				
			
		}else{
				this.id[qRoot] = pRoot;
				this.sz[pRoot]+= this.sz[qRoot];
				
			
			}
		 
	}
	
	
	
	 isConnected(p, q){
		  
		if(this.root(p) === this.root(q)){  
		    
		    console.log(p," AND ",q," is connected");
		}else{
			
			console.log(p," AND ",q," are not connected");
			}
}

}


const obj = new QuickUnion();


obj.quickUnionUF(10);

//obj.doUnion(7,4);
//obj.doUnion(4,2);
obj.doUnion(9,2);
obj.doUnion(2,6);
obj.isConnected(6,9);
obj.isConnected(1,7);


