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
		if(this.isString(strwfr) && this.isEncodingArray(type) && (type.length==strwfr.length)){
			//strwfr is a string with an iterable encoding

		}else if(this.isString(strwfr) && this.isEncoding(type)){
			//srwfr is a string with a single encoding

		}else if(this.isString(strwfr) && this.isSeparated(type)){
			//srwfr is a string separated list
		}else if(this.isString(strwfr) && !type){
			//srwfr is a string and has no type
		}else if(this.isBuffer(strwfr) && this.isEncoding(type)){
			//buffer with a single encoding

		}else if(this.isBuffer(strwfr) && this.isSeparated(type)){
			//buffer is assumed to be utf-32 type separated string

		}else if(this.isBuffer(strwfr) && !type){
			//buffer is assumed to be utf-32 string

		}else if(this.isArrayOfBuffers(strwfr) && this.isEncodingArray(type)){
			//array of buffers with multiple encodings

		}else if(this.isArrayOfBuffers(strwfr) && this.isEncoding(type)){
			//array of buffers with a single encoding

		}else if(this.isArrayOfBuffers(strwfr) && !type){
			//array of buffers with a single encoding

		}else if(this.isArray(strwfr) && this.isEncodingArray(type)){

		}else if(this.isArray(strwfr) && this.isEncoding(type)){

		}else if(this.isArray(strwfr) && !type()){

		}else{
			throw Error("Strowfers do not accept giberish, unless its actual giberish")
		}

	}

	isSeparated(type){ if(type.includes('s:')){ return true } }

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
	isArrayOfBuffers(arr){ 
		arr.forEach((buff)=>{
			if(!Buffer.isBuffer(buff)){
				return false
			} 
		})
		return true
	}

	isString(strng){ if (typeof strng === 'string' || strng instanceof String) { return true; } }
	
	isArray(arr){ return Array.isArray(arr); }

	isEncoding(type){ return Buffer.isEncoding(type); }

	isEncodingArray(type){ 
		if(this.isArray(type)){
			type.forEach(typ => {
				if(!Buffer.isEncoding(typ)){
					return false
				}
			});
			return true
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

const buf1 = [Buffer.from('1', 'utf-8'), Buffer.from('2', 'utf-8'), Buffer.from('3', 'utf-8')];
console.log(buf1.toString('utf-8'))