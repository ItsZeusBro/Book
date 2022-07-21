import { Cell } from "./Cell.js"
//a Node Buffer is just an array of decimals that represent byte values, and can be mapped to their original encoding
//They use decimal values because they are already represented in memory as bytes, but are more efficiently represented
//at a higher level as decimal

export class Strow{
    constructor(strow, type, indx=""){
		this.s; //this can represent a string, buffer, or an array
		this.t;
		this.i;
		if(this.isString(strow)){
			//if its a string, its stored locally as a string for optimization
			//String operations can be performed in Strow class as well

		}else if (this.isArray(strow) && type && indx){
			//if its an array, each element of the array is in its own cell. if there is an index for the row, set it
			//rowise operations can be performed in Strow class

		}else if (this.isBuffer(strow)&&this.isEncoding(type)){
			//if its a buffer, its stored locally with its encoding. 
			//It's decoded with strngfy()
			//its accessed with raw()

		}else{
			throw Error("strow must be a string, array, or buffer type")
		}
    }

}

new Strow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
new Strow("hello world!")
new Strow(Buffer.from([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]))