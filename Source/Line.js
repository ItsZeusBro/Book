import { Cell } from "./WordCell.js"
//a Node Buffer is just an array of decimals that represent byte values, and can be mapped to their original encoding
//They use decimal values because they are already represented in memory as bytes, but are more efficiently represented
//at a higher level as decimal

export class Strow{
    constructor(strow, type, indx=""){
		if(cntxt=='str' && strow){
			//if cntxt is a str its just a string in the strow variable
		}else if(this.isString(strow)){
			//if its a string, its stored locally as a string for optimization
		}else if (this.isArray(strow) && indx){
			//if its an array, each element of the array is in its own wordCell. if there is an index for the row, set it
		}else if (this.isBuffer(strow)&&this.isEncoding(type)){
			//if its a buffer, its stored locally with its encoding

		}else{
			throw Error("strow must be a string, array, or buffer type")
		}
    }

}

new Strow([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
new Strow("hello world!")
new Strow(Buffer.from([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]))