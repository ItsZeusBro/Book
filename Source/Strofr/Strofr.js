import { Cell } from "../Cell.js"
import { Guard, GUARD_MAP } from "./Guard.js"

class StrofrGuard extends Guard{
	constructor(){
		
	}

	isSeparator(v){
		if(v.includes('s:')){ return true }

	}
	//overrides isArray
	isArray(){

	}
	isObj(v){
		return (!this.isCell(v)&&!this.isRow(v)&&!this.isString(v)&&!this.isArray(v)&&!this.isBuffer(v)&&v&&!Array.isArray(v))
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

}
export class Strofr{
	constructor(...v)

	//strofr is an object (not a string, buffer, or cell)
	_objEncoded(...v){

	}

	//it doesn't matter if strofr is an array or string, they act the same here
	_stringEncodedArrayOrStringArrayEncodedArray(...v){
		var cells=[]
		for(var i = 0; i<strofr.length; i++){
			this.cells.push(this.newCell(strofr[i], mod[i], undefined))
		}
		this.strofr=cells
	}
	//string array, single encoding mod
	_stringArrayEncodedOrStringEncoded(...v){
		if(!this.isArray(strofr)){this.strofr= [this.newCell(strofr, mod, undefined)]}
		var cells=[]

		for(var i = 0; i<strofr.length; i++){
			this.cells.push(this.newCell(strofr[i], mod, undefined))
		}
		this.strofr=cells
	}

	//single string utf-32 (inferred), separated by sep
	_stringSeparated(...v){
		var cells=[]

		var splits = strofr.split(sep)
		splits.forEach((splt)=>{
			this.cells.push(this.newCell(splt, def, undefined))
		})

		this.strofr=cells
	}

	//single string buffer decoded utf-32 (inferred), with code array for the string positions
	_bufferEncodedArray(...v){
		strofr = Buffer.from(strofr, def)
		if(!this.sameLength(strofr, mod)){throw Error("_bufferEncodedArray")};
		this._stringEncodedArrayOrStringArrayEncodedArray(strofr, mod)
	}

	//single buffer, single encoding
	_bufferEncoded(...v){
		strofr = Buffer.from(strofr, mod)
		this._stringArrayEncodedOrStringEncoded(strofr, mod)
	}

	//single buffer decoded utf-32 (inferred), separated by sep
	_bufferSeparated(...v){
		strofr = Buffer.from(strofr, def)
		this._stringSeparated(strofr, sep)
	}

	//buffer strings decoded using utf32, then mods in array stored with respective strings
	_bufferArrayEncodedArray(...v){
		var strs=[]
		strofr.forEach((str)=>{
			strs.push(Buffer.from(str, def))
		})
		this._stringEncodedArrayOrStringArrayEncodedArray(strs, mod)
	}

	//single buffer, encoding array for buffer chars
	_bufferArrayEncoded(...v){
		strofr = Buffer.from(strofr, mod);
		if(!this.sameLength(strofr, mod)){throw Error("_bufferArrayEncoded")};
		this._stringArrayEncodedOrStringEncoded(strofr, mod);
	}

	//buffer array of strings, interpreted as utf-32 encoding
	_bufferArray(...v){
		strofr = Buffer.from(strofr, def);
		this._stringArrayEncodedOrStringEncoded(strofr, def);
	}

	//array of objects, each stored with their own code mod
	_arrayEncodedArray(...v){
		var cells=[]
		for(var i = 0; i<strofr.length; i++){
			this.cells.push(this.newCell(strofr[i], mod[i], undefined))
		}
	}

	//array of objects all with same code
	_arrayEncoded(...v){
		var cells=[]
		strofr.forEach((obj)=>{
			this.cells.push(this.newCell(obj, mod, undefined))
		})
	}


	
	

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
