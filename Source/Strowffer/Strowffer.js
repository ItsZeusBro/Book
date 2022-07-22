import { Cell } from "../Cell.js"
//Because there is a mathematical relationship between strings, arrays (rows), and buffers
//we use a Strowffer, even though we do not know how to exploit those mathematical relationships
//yet. The idea is that if we use them enough, we will find how to exploit that more. 
export class Strowfer{
	//if there are no separators defined for a string (if strwfr is a string)
	//the string is held in a single cell
	//if the strwfr is an array or buffer, it is (decoded if a buffer and) separated into cells 
    constructor(strwfr, type='utf-8', indx=''){
		this.strwfr;//strwfr = string, buffer, or an array
		this.i;//index
		this.strowferize(strwfr, type, indx)
    }

	strowferize(strwfr, type, indx){
		//whatever it is, it need not be iterable!
		//Because if it is a string, it should be contained in a single cell for optimization
		//unless you have a different encoding for each charachter
		//
	}

	toString(delim){
		//the problem with a string is that its usually encoded monolithicly
		//buffers
	}
	toRow(delim){

	}
	toBuffer(){
		//Buffers are filled with an array of cell objects, because 
		//these objects are slightly more rich than a string. They can be
		//encoded uniquely and bufferized (without losing encondoings) or 
		//stringified which is a one way function that can represent semantics
		//but not syntax
	}
	

	isBuffer(buff){ return Buffer.isBuffer(buff); }
	
	isString(strng){ if (typeof strng === 'string' || strng instanceof String) { return true; } }
	
	isArray(arr){ return Array.isArray(arr); }

	isEncoding(type){ 
		if(this.isArray(type)){
			type.forEach(typ => {
				if(!Buffer.isEncoding(typ)){
					return false
				}
			});
			return true
		}else{
			return Buffer.isEncoding(type); 
		}
	}
	isRow(strwfr){
		strwfr.forEach((cell)=>{
			if(!this.isCell(cell)){return false}
		})
		return true
	}
	isCell(cell){
		if(cell instanceof Cell && cell.v && cell.t){
			return true
		}
	}
}
