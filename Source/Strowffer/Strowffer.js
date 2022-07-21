import { Cell } from "../Cell.js"

//A STROWFER IS ONE ABSTRACT THING THAT CAN BE REPRESENTED AS AN ARRAY, STRING, OR BUFFER SIMULTANEOUSLY
export class Strowffer{
    constructor(strwfr, type='utf-8', indx=''){
		this.strwfr;//strwfr = string, buffer, or an array
		this.t;//type
		this.i;//index
		this.c;//context
		this.process(strwfr, type, indx)
    }

	process(strwfr, type, indx){
		
		if(this.isString(strwfr) && this.isEncoding(type) && strwfr.length){
			this.strwfr=strwfr
			this.t=type
			this.c='string'
			if(indx){this.i=indx}

		} else if (((this.isArray(strwfr) && strwfr.length) && (this.isEncoding(type)) || (this.isArray(type) && type.length && (type.length==strwfr.length)))){

			this.strwfr=this.wrap(strwfr, 'row', type)
			this.t=type
			this.c='row'
			if(indx){this.i=indx}

		}else if (this.isBuffer(strwfr) && this.isEncoding(type)&&strwfr.length){
			this.strwfr=this.wrap(strwfr, 'buffer', type)
			this.t=type
			this.c='buffer'
			if(indx){this.i=indx}

		}else{
			throw Error(
				`strwfr must be a string, array, or buffer 
				OR you need to provide a type (which could 
				be an array of types for rows, an encoding 
				for buffers, or an encoding for strings)`
			)
		}
	}

	//if its a string, its not decoded, just returned
	//if its a buffer, its not decoded, just returned
	//if its a row, just return an array
	raw(){

		if(this.c=='string'){

			return [this.strwfr, this.t, this.i]

		}else if(this.c=='buffer' || this.c =='row'){

			var unwrapped = this.unwrap(this.strwfr, this.t, this.c)
			return [unwrapped[0], unwrapped[1], this.i]
		
		}else{
			throw Error("Strowfer is corrupted, has no context variable defined")
		}
	}
	
	//takes a stwrfer, context, and type and either
	//encodes if its a buffer or
	//creates an array of cell objects if an array
	wrap(strwfr, context, type){

		if(context=='row' && this.isArray(strwfr) && this.isEncoding(type)){
			var arr=[]
			if(!type){
				for(var i=0; i<strwfr.length; i++){
					arr.push(new Cell(strwfr[i], 'utf-8'))
				}
	
			}else{
	
				if(this.isArray(type)){
					
					if((type.length==strwfr.length)){
						for(var i=0; i<strwfr.length; i++){
							arr.push(new Cell(strwfr[i], type[i]))
						}
	
					}else{
						throw Error("If type is an array, it must be of length strwfr.length")
					}
	
				}else{
	
					for(var i=0; i<strwfr.length; i++){
						arr.push(new Cell(strwfr[i], type))
					}
				}
			}

			return arr

		}else if(context=='buffer'&& this.isBuffer(strwfr) && this.isEncoding(type)){

			return strwfr.toString(type)
		}else{
			throw Error("wrapping of", strwfr, context, "failed")
		}

	}

	//takes a strwfer, context and either
	//creates a buffer if context is a buffer
	//creates a raw array if its an array of cell objects
	unwrap(strwfr, type, context){
		if(context=='row' && this.isRow(strwfr)){
			var vals = []
			var types = []
			strwfr.forEach((cell)=>{
				vals.push(cell.v)
				types.push(cell.t)
			})
			return [vals, types]

		}else if(context=='buffer' && this.isString(strwfr)){
			return [Buffer.from(strwfr, type), type]
		}else{
			throw Error("unwrapping of", strwfr, context, "failed")
		}
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