import { Cell } from "../Cell.js"
//Because there is a mathematical relationship between strings, arrays (rows), and buffers
//we use a Strowffer, even though we do not know how to exploit those mathematical relationships
//yet. The idea is that if we use them enough, we will find how to exploit that more. 
export class Strowfer{
	//if there are no separators defined for a string (if strofr is a string)
	//the string is held in a single cell
	//if the strofr is an array or buffer, it is (decoded if a buffer and) separated into cells 
    constructor(strofr, mod, indx){
		this.strofr=[];//strofr = string, buffer, or an array
		this.i=indx;//index
		this.strowferize(strofr, mod)
    }

	strowferize(strofr, mod){
		if(!strofr && !mod){
			throw Error("If you dont know how to use this, take my advice and leave!")
		}
		else if(this.isArray(strofr) && !this.isStringArray(strofr)&& this.isEncodedArray(mod) && this.sameLength(strofr, mod)){
			console.log("is array has encoded array, and are same length")
			this._arrayEncodedArray(strofr, mod)
		}else if(this.isArray(strofr) && !this.isStringArray(strofr) && this.isEncoded(mod)){
			console.log("is array and is encoded")
			this._arrayEncoded(strofr, mod)
		}else if(this.isArray(strofr) && !this.isStringArray(strofr) && !mod){
			console.log("isArray and no mod")
			this._array(strofr)
		}
		
		else if(this.isString(strofr) && this.isEncodedArray(mod) && this.sameLength(strofr, mod)){
			console.log("is string with an encoding array and of same length")		
			this._stringEncodedArrayOrStringArrayEncodedArray(strofr, mod) 		
		}else if(this.isStringArray(strofr) && this.isEncodedArray(mod)){
			console.log("is string array with an encoding array")		
			this._stringEncodedArrayOrStringArrayEncodedArray(strofr, mod) 		
		}else if(this.isStringArray(strofr) && this.isEncoded(mod)){
			console.log("is string with a encoding array")		
			this._stringArrayEncoded(strofr, mod) 									
		}else if(this.isStringArray(strofr) && !mod){
			console.log("STRING ARRAY, NO ENCODING, SHARED ENCODING BY INFERENCE")		
			this._stringArrayEncoded(strofr, 'utf-32')
		}else if(this.isString(strofr) && this.isEncoded(mod)){
			console.log("is string with a single encoding")		
			this._stringEncoded(strofr, mod)			
		}else if(this.isString(strofr) && !mod){
			console.log("is string without a mod")		
			this._stringEncoded(strofr, 'utf-32')		
		}else if(this.isString(strofr) && this.isSeparated(mod)){
			console.log("is string, and has a separator, string is inferred to be utf")
			this._stringSeparated(strofr, mod)
		}
		else if(this.isBuffer(strofr) && this.isEncodedArray(mod) ){
			console.log("is buffer, has encoding array for buffer string")
			this._bufferEncodedArray(strofr, mod)
		}else if(this.isBuffer(strofr) && this.isEncoded(mod)){
			console.log("is buffer, has single encoding")
			this._bufferEncoded(strofr, mod)
		}else if(this.isBuffer(strofr) && this.isSeparated(mod)){
			console.log("is buffer, has a separator")
			this._bufferSeparated(strofr, mod)
		}else if(this.isBuffer(strofr) && !mod){
			console.log("is buffer, without a mod, mod is inferred")
			this._buffer(strofr, 'utf-32')
		}else if(this.isBufferArray(strofr) && this.isEncodedArray(mod)){
			console.log("is buffer array, with a encoding array")
			this._bufferArrayEncodedArray(strofr, mod)
		}else if(this.isBufferArray(strofr) && this.isEncoded(mod)){
			console.log("is buffer array, with a single encoding")
			this._bufferArrayEncoded(strofr, mod)
		}else if(this.isBufferArray(strofr) && !mod){
			console.log("is buffer array, without an encoding, iterpreted as utf")
			this._bufferArray(strofr, 'utf-32')
		}
		else{
			throw Error("Strowfers do not accept giberish, unless its actual giberish")
		}
	}
	//it doesn't matter if strofr is an array or string, they act the same here
	_stringEncodedArrayOrStringArrayEncodedArray(strofr, mod){
		for(var i = 0; i<strofr.length; i++){
			this.strofr.push(new Cell(strofr[i], mod[i]))
		}
	}
	//string array, single encoding mod
	_stringArrayEncoded(strofr, mod){
		for(var i = 0; i<strofr.length; i++){
			this.strofr.push(new Cell(strofr[i], mod))
		}
	}
	//single string single encoding
	_stringEncoded(strofr, mod){
		this.strofr.push(new Cell(strofr, mod))
	}
	//single string utf-32 (inferred), separated by sep
	_stringSeparated(strofr, sep){
		var splits = strofr.split(sep)
		splits.forEach((splt)=>{
			this.strofr.push(new Cell(splt, 'utf-32'))
		})
	}
	//single string buffer decoded utf-32 (inferred), with code array for the string positions
	_bufferEncodedArray(strofr, mod){
		strofr = Buffer.from(strofr, 'utf-32')
		if(!this.sameLength(strofr, mod)){throw Error("_bufferEncodedArray")};
		this._stringEncodedArrayOrStringArrayEncodedArray(strofr, mod)
	}

	//single buffer, single encoding
	_bufferEncoded(strofr, mod){
		strofr = Buffer.from(strofr, mod)
		this._stringEncoded(strofr, mod)
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

	//buffer strings decoded using utf32, then mods in array stored with respective strings
	_bufferArrayEncodedArray(strofr, mod){
		var strs=[]
		strofr.forEach((str)=>{
			strs.push(Buffer.from(str, 'utf-32'))
		})
		this._stringEncodedArrayOrStringArrayEncodedArray(strs, mod)
	}

	//single buffer, encoding array for buffer chars
	_bufferArrayEncoded(strofr, mod){
		strofr = Buffer.from(strofr, mod);
		if(!this.sameLength(strofr, mod)){throw Error("_bufferArrayEncoded")};
		this._stringArrayEncoded(strofr, mod);
	}

	//buffer array of strings, interpreted as utf-32 encoding
	_bufferArray(strofr){
		strofr = Buffer.from(strofr, 'utf-32');
		this._stringArrayEncoded(strofr, 'utf-32');
	}

	//array of objects, each stored with their own code mod
	_arrayEncodedArray(strofr, mod){

		for(var i = 0; i<strofr.length; i++){
			this.strofr.push(new Cell(strofr[i], mod[i]))
		}
	}
	//array of objects all with same code
	_arrayEncoded(strofr, mod){
		strofr.forEach((obj)=>{
			this.strofr.push(new Cell(obj, mod))
		})
	}

	//sometimes an array of objects is modless by design and should not be inferred
	_array(strofr){
		strofr.forEach((obj)=>{
			this.strofr.push(new Cell(obj))
		})
	}

	isSeparated(mod){ if(mod.includes('s:')){ return true } }

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
	
	sameLength(arr1, arr2){
		if( this.isArray(arr1) && this.isArray(arr2) ){ return ( arr1.length == arr2.length ) }	
	}
	isBuffer(buff){ return Buffer.isBuffer(buff); }
	
	isBufferArray(arr){ 
		if(arr){
			arr.forEach((buff)=>{
				if(!Buffer.isBuffer(buff)){
					return false
				} 
			})
			return true
		}
	}

	isString(strng){ if (typeof strng === 'string' || strng instanceof String) { return true; } }
	
	isArray(arr){ return (Array.isArray(arr) && arr.length); }

	isStringArray(arr){ 
		if(!this.isArray(arr)){return false}
		arr.forEach( (element)=>{ if( !this.isString(element) ){ return false } } )
		return true
	}

	isEncoded(mod){ return Buffer.isEncoding(mod); }

	isEncodedArray(mod){ 
		if(this.isArray(mod)){
			mod.forEach(typ => {
				if(!Buffer.isEncoding(typ)){
					return false
				}
			});
			return true
		}
	}
	isRow(strofr){
		if(this.isArray(strofr)){
			strofr.forEach((cell)=>{
				if(!this.isCell(cell)){return false}
			})
			return true
		}
	}
	isCell(cell){
		if(cell instanceof Cell && cell.v && cell.t){
			return true
		}
	}
}

// const buf1 = [Buffer.from('1', 'utf-8'), Buffer.from('2', 'utf-8'), Buffer.from('3', 'utf-8')];
// console.log(buf1.toString('utf-8'))