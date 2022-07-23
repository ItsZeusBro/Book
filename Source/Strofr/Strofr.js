import { Cell } from "../Cell.js"

export class Strofr{
	//strofr can be a array of strings, objects, buffers, or cells
		//it can also be a string, object, or cell
		//it can also be a buffer that is any of the above	
	//mod can be a separator (only if strofr is a string or array of strings) 
		//mod can be an encoding if its anything else
	//mod2 can be an encoding if mod1 is a separator for a string or buffer
		//
    constructor(strofr, mod, mod2, indx){
		this.strofr=undefined;//strofr = string, buffer, or an array
		this.i=indx;//index
		this.def="utf-32"
		this.Strofrize(strofr, mod, mod2, indx)
    }

	Strofrize(strofr, mod, mod2, indx){
		if(this.aThingThatBreaksStrofr(strofr)||(this.aThingThatBreaksMods(mod, mod2))){
			console.log("IT BREAKS")
			throw new Error("LEAVE THIS TOMB FOR YOUR OWN GOOD")
		}
		
		else if(this.isCell(strofr) && !mod && !this.isObj(strofr)){
			//infer encoding
			console.log("CELL, NO MOD, ENCODING INFERRED AS DEF")
			this.strofr=this.newCell(strofr, this.def, undefined)
		}
		else if(this.isCell(strofr)&& this.isEncoded(mod)&& !this.isObj(strofr)){
			console.log("CELL, SINGLE ENCODING MOD")
			this.strofr=this.newCell(strofr, mod, undefined)
		}

		else if(this.isRow(strofr)&& !mod && !this.isObj(strofr)){
			console.log("ROW, NO MOD, ENCODING INFERRED AS DEF")
			this.strofr=this.newRow(strofr, this.def)

		}
		else if(this.isRow(strofr)&& this.isEncoded(mod) && !this.isObj(strofr)){
			console.log("ROW, SINGLE ENCODING MOD")
			this.strofr=this.newRow(strofr, mod)

		}
		else if(this.isRow(strofr)&& this.isEncodedArray(mod) && !this.isObj(strofr)){
			console.log("ROW, ENCODING ARRAY MOD")
			this.strofr=this.newRow(strofr, mod)
		}

		else if(this.isObj(strofr) && this.isEncoded(mod)){
			console.log("OBJECT, ENCODING ARRAY MOD")
			this._objEncoded(strofr, mod)

		}else if(this.isObj(strofr) && !mod){
			console.log("OBJECT, NO MOD, ENCODING INFERRED AS DEF")
			this._objEncoded(strofr, this.def)
		}

		else if(this.isObjArray(strofr) && this.isEncodedArray(mod) && this.sameLength(strofr, mod)){
			console.log("OBJECT ARRAY, ENCODING ARRAY MOD")
			this._arrayEncodedArray(strofr, mod)
		}else if(this.isObjArray(strofr) && this.isEncoded(mod)){
			console.log("OBJECT ARRAY, SINGLE ENCODING MOD")
			this._arrayEncoded(strofr, mod)
		}else if(this.isObjArray(strofr) && !mod){
			console.log("OBJECT ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			this._arrayEncoded(strofr, this.def)
		}
		
		else if(this.isStringArray(strofr) && this.isEncodedArray(mod)){
			console.log("STRING ARRAY, ENCODING ARRAY MOD")		
			this._stringEncodedArrayOrStringArrayEncodedArray(strofr, mod) 		
		}else if(this.isStringArray(strofr) && !mod){
			console.log("STRING ARRAY, NO MOD, ENCODING INFERRED AS DEF")		
			this._stringArrayEncodedOrStringEncoded(strofr, this.def)
		}
		else if(this.isStringArray(strofr) && this.isEncoded(mod)){
			console.log("STRING ARRAY, SINGLE ENCODING MOD")	
			this._stringArrayEncodedOrStringEncoded(strofr, mod)
		}
		 
		//separator condition needs to come first because it might be confused for an encoding
		else if(this.isString(strofr) && this.isSeparated(mod)){
			console.log("STRING, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			this._stringSeparated(strofr, mod, this.def)
		}else if(this.isString(strofr) && this.isEncodedArray(mod) && this.sameLength(strofr, mod)){
			console.log("STRING, ENCODING ARRAY MOD")	
			this._stringEncodedArrayOrStringArrayEncodedArray(strofr, mod) 		
		}else if(this.isString(strofr) && this.isEncoded(mod)){
			console.log("STRING, SINGLE ENCODING MOD")	
			this._stringArrayEncodedOrStringEncoded(strofr, mod)
		}else if(this.isString(strofr) && !mod){
			console.log("STRING, NO MOD, ENCODING INFERRED AS DEF")		
			this._stringArrayEncodedOrStringEncoded(strofr, this.def)
		}
		
		else if(this.isBufferArray(strofr) && this.isEncodedArray(mod)){
			console.log("BUFFER ARRAY, ENCODING ARRAY MOD")
			this._bufferArrayEncodedArray(strofr, mod)
		}else if(this.isBufferArray(strofr) && this.isEncoded(mod)){
			console.log("BUFFER ARRAY, SINGLE ENCODING MOD")
			this._bufferArrayEncoded(strofr, mod)
		}else if(this.isBufferArray(strofr) && !mod){
			console.log("BUFFER ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			this._bufferArray(strofr, this.def)
		}
		
		else if(this.isBuffer(strofr) && this.isSeparated(mod)){
			console.log("BUFFER, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			this._bufferSeparated(strofr, mod)
		}else if(this.isBuffer(strofr) && this.isEncodedArray(mod) ){
			console.log("BUFFER, ENCODING ARRAY MOD")
			this._bufferEncodedArray(strofr, mod)
		}else if(this.isBuffer(strofr) && this.isEncoded(mod)){
			console.log("BUFFER, SINGLE ENCODING MOD")
			this._bufferEncoded(strofr, mod)
		}else if(this.isBuffer(strofr) && !mod){
			console.log("BUFFER, NO MOD, ENCODING INFERRED AS DEF")
			this._bufferEncoded(strofr, this.def)
		}
		else{
			throw new Error("LEAVE THIS TOMB FOR YOUR OWN GOOD")
		}
	}

	//strofr is an object (not a string, buffer, or cell)
	_objEncoded(strofr, mod){

	}

	//it doesn't matter if strofr is an array or string, they act the same here
	_stringEncodedArrayOrStringArrayEncodedArray(strofr, mod){
		var cells=[]
		for(var i = 0; i<strofr.length; i++){
			this.cells.push(this.newCell(strofr[i], mod[i], undefined))
		}
		this.strofr=cells
	}
	//string array, single encoding mod
	_stringArrayEncodedOrStringEncoded(strofr, mod){
		if(!this.isArray(strofr)){this.strofr= [this.newCell(strofr, mod, undefined)]}
		var cells=[]

		for(var i = 0; i<strofr.length; i++){
			this.cells.push(this.newCell(strofr[i], mod, undefined))
		}
		this.strofr=cells
	}

	//single string utf-32 (inferred), separated by sep
	_stringSeparated(strofr, sep, def){
		var cells=[]

		var splits = strofr.split(sep)
		splits.forEach((splt)=>{
			this.cells.push(this.newCell(splt, def, undefined))
		})

		this.strofr=cells
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
		this._stringArrayEncodedOrStringEncoded(strofr, mod)
	}

	//single buffer decoded utf-32 (inferred), separated by sep
	_bufferSeparated(strofr, sep, def){
		strofr = Buffer.from(strofr, def)
		this._stringSeparated(strofr, sep)
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
		this._stringArrayEncodedOrStringEncoded(strofr, mod);
	}

	//buffer array of strings, interpreted as utf-32 encoding
	_bufferArray(strofr, def){
		strofr = Buffer.from(strofr, def);
		this._stringArrayEncodedOrStringEncoded(strofr, def);
	}

	//array of objects, each stored with their own code mod
	_arrayEncodedArray(strofr, mod){
		var cells=[]
		for(var i = 0; i<strofr.length; i++){
			this.cells.push(this.newCell(strofr[i], mod[i], undefined))
		}
	}

	//array of objects all with same code
	_arrayEncoded(strofr, mod){
		var cells=[]
		strofr.forEach((obj)=>{
			this.cells.push(this.newCell(obj, mod, undefined))
		})
	}


	isObj(strofr){
		return (!this.isCell(strofr)&&!this.isRow(strofr)&&!this.isString(strofr)&&!this.isArray(strofr)&&!this.isBuffer(strofr)&&strofr&&!Array.isArray(strofr))
	}
	
	isSeparated(mod){ if(mod.includes('s:')){ return true } }

	sameLength(arr1, arr2){
		if( this.isArray(arr1) && this.isArray(arr2) ){ return ( arr1.length == arr2.length ) }	
	}
	
	aThingThatBreaksStrofr(strofr){
		if((Array.isArray(strofr)&&!strofr.length)||!strofr){return true};
	}
	aThingThatBreaksMods(mod, mod2){
		if((Array.isArray(mod)&&!mod.length)||(mod==true)){return true};
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
	
	isObjArray(strofr){ return (Array.isArray(strofr) && strofr.length && !this.isStringArray(strofr) && !this.isBufferArray(strofr)); }

	isArray(strofr){ return (Array.isArray(strofr)) && strofr.length }

	isStringArray(strofr){ 
		if(!this.isArray(strofr)){return false}
		strofr.forEach( (element)=>{ if( !this.isString(element) ){ return false } } )
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

	newCell(strofr, encoding, indx){
		return new Cell(strofr, encoding, indx)
	}

	newRow(strofr, encoding, indx){
		var row = []
		if(this.isArray(strofr) && this.isArray(encoding) && this.sameLength(strofr, encoding)){
			for(var i=0; i<strofr.length; i++){
				this.newCell(strofr[i], encoding[i], indx)
			}
		}else if(this.isArray(strofr) && type){
			for(var i=0; i<strofr.length; i++){
				this.newCell(strofr[i], encoding, indx)
			}
		}else{
			throw Error('NOT ROWABLE')
		}
	}
}
