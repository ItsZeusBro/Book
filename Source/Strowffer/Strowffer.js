import { Cell } from "../Cell.js"
//Because there is a mathematical relationship between strings, arrays (rows), and buffers
//we use a Strowffer, even though we do not know how to exploit those mathematical relationships
//yet. The idea is that if we use them enough, we will find how to exploit that more. 
export class Strowfer{
	//if there are no separators defined for a string (if strwfr is a string)
	//the string is held in a single cell
	//if the strwfr is an array or buffer, it is (decoded if a buffer and) separated into cells 
    constructor(strwfr, type='utf-8', indx=undefined){
		this.strwfr;//strwfr = string, buffer, or an array
		this.i=indx;//index
		this.strowferize(strwfr, type)
    }

	strowferize(strwfr, type){
		if(this.isString(strwfr) && this.isEncodedArray(type) && (type.length==strwfr.length)){
			this._stringEncodedArray(strwfr, type)
		}else if(this.isStringArray(strwfr) && this.isEncodedArray(type)){
			this._stringArrayEncodedArray(strwfr, type)
		}else if(this.isStringArray(strwfr) && this.isEncoded(type)){
			this._stringArrayEncoded(strwfr, type)
		}else if(this.isStringArray(strwfr) && !type){
			this._stringArray(strwfr)
		}else if(this.isString(strwfr) && this.isEncoded(type)){
			this._stringEncoded(strwfr, type)
		}else if(this.isString(strwfr) && this.isSeparated(type)){
			this._stringSeparated(strwfr, type)
		}else if(this.isString(strwfr) && !type){
			this._string(strwfr)
		}else if(this.isBuffer(strwfr) && this.isEncodedArray(type) ){
			this._bufferEncodedArray(strwfr, type)
		}else if(this.isBuffer(strwfr) && this.isEncoded(type)){
			this._bufferEncoded(strwfr, type)
		}else if(this.isBuffer(strwfr) && this.isSeparated(type)){
			this._bufferSeparated(strwfr, type)
		}else if(this.isBuffer(strwfr) && !type){
			this._buffer(strwfr)
		}else if(this.isBufferArray(strwfr) && this.isEncodedArray(type)){
			this._bufferArrayEncodedArray(strwfr, type)
		}else if(this.isBufferArray(strwfr) && this.isEncoded(type)){
			this._bufferArrayEncoded(strwfr, type)
		}else if(this.isBufferArray(strwfr) && !type){
			this._bufferArray(strwfr)
		}else if(this.isArray(strwfr) && this.isEncodedArray(type)){
			this._arrayEncodedArray(strwfr, type)
		}else if(this.isArray(strwfr) && this.isEncoded(type)){
			this._arrayEncoded(strwfr, type)
		}else if(this.isArray(strwfr) && !type()){
			this._array(strwfr)
		}else{
			throw Error("Strowfers do not accept giberish, unless its actual giberish")
		}
	}

	_stringEncodedArray(strwfr, type){
		var cells=[]
		for(var i = 0; i<strwfr.length; i++){
			cells.push(new Cell(strwfr[i], type[i]))
		}
		this.strwfr=cells;
	}
	_stringArrayEncodedArray(strwfr, type){

	}
	_stringArrayEncoded(strwfr, type){

	}
	_stringArray(strwfr){

	}
	_stringEncoded(strwfr, type){

	}
	_stringSeparated(strwfr, type){

	}
	_string(strwfr){

	}
	_bufferEncodedArray(strwfr, type){

	}
	_bufferEncoded(strwfr, type){

	}
	_bufferSeparated(strwfr, type){

	}
	_buffer(strwfr){

	}
	_bufferArrayEncodedArray(strwfr, type){

	}
	_bufferArrayEncoded(strwfr, type){

	}
	_bufferArray(strwfr){

	}
	_arrayEncodedArray(strwfr, type){

	}
	_arrayEncoded(strwfr, type){

	}
	_array(strwfr){

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
	isBufferArray(arr){ 
		arr.forEach((buff)=>{
			if(!Buffer.isBuffer(buff)){
				return false
			} 
		})
		return true
	}

	isString(strng){ if (typeof strng === 'string' || strng instanceof String) { return true; } }
	
	isArray(arr){ return Array.isArray(arr); }

	isEncoded(type){ return Buffer.isEncoding(type); }

	isEncodedArray(type){ 
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