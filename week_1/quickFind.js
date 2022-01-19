

class QuickFind{
	
	constructor(){
	this.id = [];
	
	}

	quickFindU(N){
		
		
		for(let i =0 ;i < N; i++)
		{
			
				this.id[i] = i;
			
		}
		
		
		
	}
	
	isConnected(p, q){
		
		
	if(this.id[p] === this.id[q]){
		
		
			console.log(this.id[p] === this.id[q])
	}else
	{
			console.log("Not connected")
	}	
		
		
	}
	
	union(p, q) {

        var qid = this.id[q];
        var pid = this.id[p];

        for(var i = 0; i < this.id.length; i++) {
        	
            if(this.id[i] === pid) 
            {
				this.id[i] = qid;
			}
        }
    }
	
	
}

const a = new QuickFind();

a.quickFindU(20);
a.union(2,3);
a.isConnected(2,3);
a.isConnected(1,8);

