import { Cell } from "../Cell.js"
//Because there is a mathematical relationship between strings, arrays (rows), and buffers
//we use a Strowffer, even though we do not know how to exploit those mathematical relationships
//yet. The idea is that if we use them enough, we will find how to exploit that more. 
export class Strowfer{
	//if there are no separators defined for a string (if strofr is a string)
	//the string is held in a single cell
	//if the strofr is an array or buffer, it is (decoded if a buffer and) separated into cells 
    constructor(strofr, type='utf-8', indx=undefined){
		this.strofr=[];//strofr = string, buffer, or an array
		this.i=indx;//index
		this.strowferize(strofr, type)
    }

	strowferize(strofr, type){
		if(this.isString(strofr) && this.isEncodedArray(type) && (type.length==strofr.length)){
			this._stringEncodedArrayOrStringArrayEncodedArray(strofr, type) 		
		}else if(this.isStringArray(strofr) && this.isEncodedArray(type)){
			this._stringEncodedArrayOrStringArrayEncodedArray(strofr, type) 		
		}else if(this.isStringArray(strofr) && this.isEncoded(type)){
			this._stringArrayEncoded(strofr, type) 									
		}else if(this.isStringArray(strofr) && !type){
			this._stringArrayEncoded(strofr, 'utf-32')
		}else if(this.isString(strofr) && this.isEncoded(type)){
			this._stringEncoded(strofr, type)			
		}else if(this.isString(strofr) && !type){		
			this._stringEncoded(strofr, 'utf-32')		
		}else if(this.isString(strofr) && this.isSeparated(type)){
			this._stringSeparated(strofr, type)
		}
		else if(this.isBuffer(strofr) && this.isEncodedArray(type) ){
			this._bufferEncodedArray(strofr, type)
		}else if(this.isBuffer(strofr) && this.isEncoded(type)){
			this._bufferEncoded(strofr, type)
		}else if(this.isBuffer(strofr) && this.isSeparated(type)){
			this._bufferSeparated(strofr, type)
		}else if(this.isBuffer(strofr) && !type){
			this._buffer(strofr, 'utf-32')
		}else if(this.isBufferArray(strofr) && this.isEncodedArray(type)){
			this._bufferArrayEncodedArray(strofr, type)
		}else if(this.isBufferArray(strofr) && this.isEncoded(type)){
			this._bufferArrayEncoded(strofr, type)
		}else if(this.isBufferArray(strofr) && !type){
			this._bufferArray(strofr, 'utf-32')
		}else if(this.isArray(strofr) && this.isEncodedArray(type)){
			this._arrayEncodedArray(strofr, type)
		}else if(this.isArray(strofr) && this.isEncoded(type)){
			this._arrayEncoded(strofr, type)
		}else if(this.isArray(strofr) && !type()){
			this._array(strofr)
		}else{
			throw Error("Strowfers do not accept giberish, unless its actual giberish")
		}
	}
	//it doesn't matter if strofr is an array or string, they act the same here
	_stringEncodedArrayOrStringArrayEncodedArray(strofr, type){
		for(var i = 0; i<strofr.length; i++){
			this.strofr.push(new Cell(strofr[i], type[i]))
		}
	}
	//string array, single encoding type
	_stringArrayEncoded(strofr, type){
		for(var i = 0; i<strofr.length; i++){
			this.strofr.push(new Cell(strofr[i], type))
		}
	}
	//single string single encoding
	_stringEncoded(strofr, type){
		this.strofr.push(new Cell(strofr, type))
	}
	//single string utf-32 (inferred), separated by sep
	_stringSeparated(strofr, sep){
		var splits = strofr.split(sep)
		splits.forEach((splt)=>{
			this.strofr.push(new Cell(splt, 'utf-32'))
		})
	}
	//single string buffer decoded utf-32 (inferred), with code array for the string positions
	_bufferEncodedArray(strofr, type){
		strofr = Buffer.from(strofr, 'utf-32')
		this._stringEncodedArrayOrStringArrayEncodedArray(strofr, type)
	}

	//single buffer, single encoding
	_bufferEncoded(strofr, type){
		strofr = Buffer.from(strofr, type)
		this._stringEncoded(strofr, type)
	}

	//single buffer decoded utf-32 (inferred), separated by sep
	_bufferSeparated(strofr, sep){
		strofr = Buffer.from(strofr, 'utf-32')
		this._stringSeparated(strofr, sep)
	}
	//single buffer, utf-32 decoding inferred
	_buffer(strofr){
		strofr = Buffer.from(strofr, 'utf-32')
		this._stringEncoded(strofr, 'utf-32')
	}

	//buffer strings decoded using utf32, then types in array stored with respective strings
	_bufferArrayEncodedArray(strofr, type){
		var strs=[]
		strofr.forEach((str)=>{
			strs.push(Buffer.from(str, 'utf-32'))
		})
		this._stringEncodedArrayOrStringArrayEncodedArray(strs, type)
	}

	//
	_bufferArrayEncoded(strofr, type){
		strofr = Buffer.from(strofr, type)
		this._stringArrayEncoded(strofr, type)
	}

	_bufferArray(strofr){
		strofr = Buffer.from(strofr, 'utf-32')
		this._stringArrayEncoded(strofr, 'utf-32')
	}

	_arrayEncodedArray(strofr, type){
		for(var i = 0; i<strofr.length; i++){
			this.strofr.push(new Cell(strofr[i], type[i]))
		}
	}

	_arrayEncoded(strofr, type){
		strofr.forEach((obj)=>{
			this.strofr.push(new Cell(obj, type))
		})
	}
	//sometimes an array of objects is typeless by design and should not be inferred
	_array(strofr){
		strofr.forEach((obj)=>{
			this.strofr.push(new Cell(obj))
		})
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
	isRow(strofr){
		strofr.forEach((cell)=>{
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