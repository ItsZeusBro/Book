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
		if(this.isString(strow)){
			//if its a string, its stored locally as a string for optimization
			//String operations can be performed in Strow class as well
			console.log(strow)

		}else if (this.isArray(strow) && type && indx){
			//if its an array, each element of the array is in its own cell. if there is an index for the row, set it
			//rowise operations can be performed in Strow class
			this.s=[]
			for(var i=0; i<strow.length; i++){
				this.s.push(new Cell(strow[i], type[i]))
			}
			this.c='row'
		}else if (this.isBuffer(strow)&&this.isEncoding(type)){
			//if its a buffer, its stored locally with its encoding. 
			//It's decoded with strngfy()
			//its accessed with raw()
			this.s=strow
			this.t=type
			this.c='buff'
		}else{
			throw Error("strow must be a string, array, or buffer type")
		}
    }

}

new Strow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int'], 'arbitrary row data')
new Strow("hello world!")
new Strow(Buffer.from([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 'utf-8')