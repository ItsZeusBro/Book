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

	strowferize(strofr, mod, def='utf-32'){
		if(!strofr && !mod){
			throw Error("If you dont know how to use this, take my advice and leave!")
		}

		else if(this.isArray(strofr) && !this.isStringArray(strofr) && !this.isBufferArray(strofr) && this.isEncodedArray(mod) && this.sameLength(strofr, mod)){
			console.log("OBJECT ARRAY, NOT STRING ARRAY, NOT BUFFER ARRAY, ENCODING ARRAY MOD")
			this._arrayEncodedArray(strofr, mod)
		}else if(this.isArray(strofr) && !this.isStringArray(strofr) && !this.isBufferArray(strofr) && this.isEncoded(mod)){
			console.log("OBJECT ARRAY, NOT STRING ARRAY, NOT BUFFER ARRAY, SINGLE ENCODING MOD")
			this._arrayEncoded(strofr, mod)
		}else if(this.isArray(strofr) && !this.isStringArray(strofr) && !this.isBufferArray(strofr) && !mod){
			console.log("OBJECT ARRAY, NOT STRING ARRAY, NOT BUFFER ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			this._array(strofr)
		}
		

		else if(this.isString(strofr) && this.isEncodedArray(mod) && this.sameLength(strofr, mod)){
			console.log("STRING, ENCODING ARRAY MOD")	
			this._stringEncodedArrayOrStringArrayEncodedArray(strofr, mod) 		
		}else if(this.isStringArray(strofr) && this.isEncodedArray(mod)){
			console.log("STRING ARRAY, ENCODING ARRAY MOD")		
			this._stringEncodedArrayOrStringArrayEncodedArray(strofr, mod) 		
		}else if(this.isStringArray(strofr) && this.isEncoded(mod)){
			console.log("STRING, ENCODING ARRAY MOD")	
			this._stringArrayEncoded(strofr, mod) 									
		}else if(this.isStringArray(strofr) && !mod){
			console.log("STRING ARRAY, NO MOD, ENCODING INFERRED AS DEF")		
			this._stringArrayEncoded(strofr, def)
		}else if(this.isString(strofr) && this.isEncoded(mod)){
			console.log("STRING, SINGLE ENCODING MOD")	
			this._stringEncoded(strofr, mod)			
		}else if(this.isString(strofr) && !mod){
			console.log("STRING, NO MOD")		
			this._stringEncoded(strofr, def)		
		}else if(this.isString(strofr) && this.isSeparated(mod)){
			console.log("STRING, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			this._stringSeparated(strofr, mod, def)
		}


		else if(this.isBuffer(strofr) && this.isEncodedArray(mod) ){
			console.log("BUFFER, ENCODING ARRAY MOD")
			this._bufferEncodedArray(strofr, mod)
		}else if(this.isBuffer(strofr) && this.isEncoded(mod)){
			console.log("BUFFER, SINGLE ENCODING MOD")
			this._bufferEncoded(strofr, mod)
		}else if(this.isBuffer(strofr) && this.isSeparated(mod)){
			console.log("BUFFER, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			this._bufferSeparated(strofr, mod)
		}else if(this.isBuffer(strofr) && !mod){
			console.log("BUFFER, NO MOD, ENCODING INFERRED AS DEF")
			this._buffer(strofr, def)
		}else if(this.isBufferArray(strofr) && this.isEncodedArray(mod)){
			console.log("BUFFER ARRAY, ENCODING ARRAY MOD")
			this._bufferArrayEncodedArray(strofr, mod)
		}else if(this.isBufferArray(strofr) && this.isEncoded(mod)){
			console.log("BUFFER ARRAY, SINGLE ENCODING MOD")
			this._bufferArrayEncoded(strofr, mod)
		}else if(this.isBufferArray(strofr) && !mod){
			console.log("BUFFER ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			this._bufferArray(strofr, def)
		}
		else{
			throw Error("Strowfers do not accept giberish, unless its actual giberish")
		}
	}


	_rawString(){

	}

	_rawStringArray(){

	}

	_rawBuffer(){

	}

	_rawBufferArray(){

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
	_stringSeparated(strofr, sep, def){
		var splits = strofr.split(sep)
		splits.forEach((splt)=>{
			this.strofr.push(new Cell(splt, def))
		})
	}
	//single string buffer decoded utf-32 (inferred), with code array for the string positions
	_bufferEncodedArray(strofr, mod, def){
		strofr = Buffer.from(strofr, def)
		if(!this.sameLength(strofr, mod)){throw Error("_bufferEncodedArray")};
		this._stringEncodedArrayOrStringArrayEncodedArray(strofr, mod)
	}

	//single buffer, single encoding
	_bufferEncoded(strofr, mod){
		strofr = Buffer.from(strofr, mod)
		this._stringEncoded(strofr, mod)
	}

	//single buffer decoded utf-32 (inferred), separated by sep
	_bufferSeparated(strofr, sep, def){
		strofr = Buffer.from(strofr, def)
		this._stringSeparated(strofr, sep)
	}
	//single buffer, utf-32 decoding inferred
	_buffer(strofr, def){
		strofr = Buffer.from(strofr, def)
		this._stringEncoded(strofr, def)
	}

	//buffer strings decoded using utf32, then mods in array stored with respective strings
	_bufferArrayEncodedArray(strofr, mod, def){
		var strs=[]
		strofr.forEach((str)=>{
			strs.push(Buffer.from(str, def))
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
	_bufferArray(strofr, def){
		strofr = Buffer.from(strofr, def);
		this._stringArrayEncoded(strofr, def);
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