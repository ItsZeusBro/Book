import { Cell } from "./Cell.js"
//a Node Buffer is just an array of decimals that represent byte values, and can be mapped to their original encoding
//They use decimal values because they are already represented in memory as bytes, but are more efficiently represented
//at a higher level as decimal

export class Strowffer{
    constructor(strow, type, indx=""){
		this.s;//strow = string, buffer, or an array
		this.t;//type
		this.i;//index
		this.c;//context
		if(this.isString(strow)&&this.isEncoding(type)){
			//if its a string, its stored locally as a string for optimization
			//String operations can be performed in Strow class as well
			this.t=type
			this.c='string'
			if(indx){this.i=indx}
		}else if (this.isArray(strow) && type){
			//if its an array, each element of the array is in its own cell. if there is an index for the row, set it
			//rowise operations can be performed in Strow class
			this.s=[]
			if(!type){
				//type is utf-8
				for(var i=0; i<strow.length; i++){
					this.s.push(new Cell(strow[i], 'utf-8'))
				}
			}else{
				if(this.isArray(type)){
					//if type is array, check to make sure length is equal to strow length
					if((type.length==strow.length)){
						for(var i=0; i<strow.length; i++){
							this.s.push(new Cell(strow[i], type[i]))
						}
					}else{
						throw Error("If type is an array, it must be of length strow.length")
					}
				}else{
					//if type is not array, just set the type for each strow to be of type type
					for(var i=0; i<strow.length; i++){
						this.s.push(new Cell(strow[i], type))
					}
				}
			}

			this.c='row'
			this.t=type
			if(indx){this.i=indx}
		}else if (this.isBuffer(strow)&&this.isEncoding(type)){
			//if its a buffer, its stored locally with its encoding. 
			//It's decoded with strngfy()
			//its accessed with raw()
			this.s=strow
			this.t=type
			this.c='buff'
			if(indx){this.i=indx}
		}else{
			throw Error("strow must be a string, array, or buffer type")
		}
    }

	isBuffer(){

	}
	isString(){

	}
	isArray(){

	}
	isEncoding(){
		
	}

}

new Strow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int'], 'arbitrary row data')
new Strow("hello world!", 'utf-8')
new Strow(Buffer.from([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 'utf-8')