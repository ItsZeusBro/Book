import { Cell } from "./Cell.js"


export class Strowffer{
    constructor(strwfr, type, indx=""){
		this.strwfr;//strwfr = string, buffer, or an array
		this.t;//type
		this.i;//index
		this.c;//context
		this.process(strwfr, type, indx)
    }

	process(strwfr, type, indx){
		if(this.isString(strwfr) && this.isEncoding(type)){
			this.strwfr=strwfr
			this.t=type
			this.c='string'
			if(indx){this.i=indx}

		} else if (this.isArray(strwfr) && this.isEncoding(type)){
			this.strwfr=this.wrap(strwfr, 'row', type)
			this.t=type
			this.c='row'
			if(indx){this.i=indx}

		}else if (this.isBuffer(strwfr) && this.isEncoding(type)){
			this.strwfr=wrap(strwfr, 'buffer', type)
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
			return [this.unwrap(this.strwfr, this.c), this.t, this.i]
		
		}else{
			throw Error("Strowfer is corrupted, has no context variable defined")
		}
	
	}

	
	//takes a stwrfer, context, and type and either
	//encodes if its a buffer or
	//creates an array of cell objects if an array
	wrap(strwfr, context, type){

		if(context=='row'&& this.isArray(strwfr) && this.isEncoding(type)){
			if(!type){
				for(var i=0; i<strwfr.length; i++){
					strwfr.push(new Cell(strwfr[i], 'utf-8'))
				}
	
			}else{
	
				if(this.isArray(type)){
	
					if((type.length==strwfr.length)){
	
						for(var i=0; i<strwfr.length; i++){
							strwfr.push(new Cell(strwfr[i], type[i]))
						}
	
					}else{
						throw Error("If type is an array, it must be of length strwfr.length")
					}
	
				}else{
	
					for(var i=0; i<strwfr.length; i++){
						strwfr.push(new Cell(strwfr[i], type))
					}
				}
			}

			return strwfr

		}else if(context=='buffer'&& this.isBuffer(strwfr)&&this.isEncoding(type)){
			return Buffer.from(strwfr, type)
		}

	}

	//takes a strwfer, context and either
	//creates a buffer if context is a buffer
	//creates a raw array if its an array of cell objects
	unwrap(strwfer, context){
		if(context=='row'&& this.isArray(strwfr)){
			

			return strwfr

		}else if(context=='buffer'&& this.isBuffer(strwfr)&&this.isEncoding(type)){
			return //Buffer.from(strwfr, type)
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

	
}

console.log(new Strowffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int'], 'arbitrary row data'))
console.log(new Strowffer("hello world!", 'utf-8', 'greeting'))
console.log(new Strowffer(Buffer.from([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 'utf-8', 'arbitrary buffer'))