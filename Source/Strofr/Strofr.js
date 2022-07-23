import { Cell } from "./Cell.js"
import { Guard, GUARD_MAP } from "./Guard.js"

class StrofrGuard extends Guard{
	constructor(){
		
	}

	isSeparator(v){ if(v.includes('s:')){ return true } }

	sameLength(arr1, arr2){
		if( this.isArray(arr1) && this.isArray(arr2) ){ return ( arr1.length == arr2.length ) }	
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
		if(cell instanceof Cell && cell.v && cell.e && cell.i){
			return true
		}
	}

	

	sameLength(...v){
		if( this.isArray(arr1) && this.isArray(arr2) ){ return ( arr1.length == arr2.length ) }	
	}
	
}
export class Strofr{
	constructor(...v){
		new StrofrGuard(v, this)
	}

	//strofr is an object (not a string, buffer, or cell)
	_objEncoded(...v){

	}

	//it doesn't matter if strofr is an array or string, they act the same here
	_stringEncodedArrayOrStringArrayEncodedArray(...v){

	}
	//string array, single encoding mod
	_stringArrayEncodedOrStringEncoded(...v){

	}

	//single string utf-32 (inferred), separated by sep
	_stringSeparated(...v){

	}

	//single string buffer decoded utf-32 (inferred), with code array for the string positions
	_bufferEncodedArray(...v){

	}

	//single buffer, single encoding
	_bufferEncoded(...v){

	}

	//single buffer decoded utf-32 (inferred), separated by sep
	_bufferSeparated(...v){

	}

	//buffer strings decoded using utf32, then mods in array stored with respective strings
	_bufferArrayEncodedArray(...v){

	}

	//single buffer, encoding array for buffer chars
	_bufferArrayEncoded(...v){

	}

	//buffer array of strings, interpreted as utf-32 encoding
	_bufferArray(...v){

	}

	//array of objects, each stored with their own code mod
	_arrayEncodedArray(...v){

	}

	//array of objects all with same code
	_arrayEncoded(...v){

	}

	newCell(...v){

	}

	newRow(...v){

	}
}
