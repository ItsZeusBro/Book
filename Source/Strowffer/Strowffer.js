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
			this._stringEncodedArray(strwfr, type, indx)
		}else if(this.isArrayOfStrings(strwfr) && this.isEncodingArray(type)){
			//srwfr is a string with a single encoding
			this._stringArrayEncodedArray(strwfr, type, indx)

		}
		else if(this.isArrayOfStrings(strwfr) && this.isEncoding(type)){
			//srwfr is a string with a single encoding
			this._stringArrayEncoded(strwfr, type, indx)

		}
		else if(this.isArrayOfStrings(strwfr) && !type){
			//srwfr is a string with infered encoding
			this._stringArrayEncoded(strwfr, 'utf-32', indx)

		}
		else if(this.isString(strwfr) && this.isEncoding(type)){
			//srwfr is a string with a single encoding
			this._stringEncoded(strwfr, type, indx)

		}else if(this.isString(strwfr) && this.isSeparated(type)){
			//srwfr is a string separated list
			this._stringSeparated(strwfr, type, indx)

		}else if(this.isString(strwfr) && !type){
			//srwfr is a string and assumed to be utf-32
			this._stringEncoded(strwfr, 'utf-32', indx)

		}else if(this.isBuffer(strwfr) && this.isEncodingArray(type) ){
			//buffer with a single encoding
			//convert buffer to string here
			strwfr = strwfr.toString('utf-32')
			if(type.length==strwfr.length){
				this._stringEncodedArray(strwfr, type, indx)
			}else{
				throw Error("utf32 buffer must be of length equal to type array length")
			}
		}else if(this.isBuffer(strwfr) && this.isEncoding(type)){
			//buffer with a single encoding
			this._stringEncoded(strwfr, type, indx)

		}else if(this.isBuffer(strwfr) && this.isSeparated(type)){
			//buffer is assumed to be utf-32 type separated string
			this._stringSeparated(strwfr, 'utf-32', indx)

		}else if(this.isBuffer(strwfr) && !type){
			//buffer is assumed to be utf-32 string
			this._string(strwfr, indx)

		}else if(this.isArrayOfBuffers(strwfr) && this.isEncodingArray(type)){
			//array of string buffers with multiple encodings
			this._stringArrayEncodedArray(strwfr, type, indx)
		}else if(this.isArrayOfBuffers(strwfr) && this.isEncoding(type)){
			//array of buffers with a single encoding
			this._stringArrayEncoded(strwfr, type, indx)

		}else if(this.isArrayOfBuffers(strwfr) && !type){
			//array of buffers with a utf-32 type
			this._stringArrayEncoded(strwfr, 'utf-32', indx)

		}else if(this.isArray(strwfr) && this.isEncodingArray(type)){
			//array of whatever, and encoding array
		}else if(this.isArray(strwfr) && this.isEncoding(type)){
			//array of whatever and single encoding type
		}else if(this.isArray(strwfr) && !type()){
			//array of whatever, with utf-32 type
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