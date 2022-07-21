import { Cell } from "./Cell.js"
//a Node Buffer is just an array of decimals that represent byte values, and can be mapped to their original encoding
//They use decimal values because they are already represented in memory as bytes, but are more efficiently represented
//at a higher level as decimal

export class Strowffer{
    constructor(strwfr, type, indx=""){
		this.strwfr;//strwfr = string, buffer, or an array
		this.t;//type
		this.i;//index
		this.c;//context
		this.init(strwfr, type, indx)
    }

	init(){
		if(this.isString(strwfr)&&!type){
			this.strwfr=strwfr
			this.t=type
			this.c='string'

			if(indx){this.i=indx}
		} else if (this.isArray(strwfr) && type){
			this.strwfr=[]

			if(!type){

				for(var i=0; i<strwfr.length; i++){
					this.strwfr.push(new Cell(strwfr[i], 'utf-8'))
				}

			}else{

				if(this.isArray(type)){

					if((type.length==strwfr.length)){

						for(var i=0; i<strwfr.length; i++){
							this.strwfr.push(new Cell(strwfr[i], type[i]))
						}

					}else{
						throw Error("If type is an array, it must be of length strwfr.length")
					}

				}else{

					for(var i=0; i<strwfr.length; i++){
						this.strwfr.push(new Cell(strwfr[i], type))
					}
				}
			}

			this.c='row'
			this.t=type

			if(indx){this.i=indx}

		}else if (this.isBuffer(strwfr)&&this.isEncoding(type)){
			this.strwfr=strwfr
			this.t=type
			this.c='buffer'

			if(indx){this.i=indx}

		}else{
			throw Error("strwfr must be a string, array, or buffer type")
		}
	}

	isBuffer(buff){ return Buffer.isBuffer(buff); }
	isString(strng){ if (typeof strng === 'string' || strng instanceof String) { return true; } }
	isArray(arr){ return Array.isArray(arr); }
	isEncoding(encdg){ return Buffer.isEncoding(encdg); }

	raw(){

		if(this.c=='string'){
			return this.strwfr;

		}else if(this.c=='buffer'){
			return this.strwfr
		
		}else if(this.c=='row'){
			return this.unwrap(this.strwfr)
		}else{
			throw Error("Strowfer is corrupted, has no context variable defined")
		}
		//if its a string, its not decoded, just returned
		//if its a buffer, its not decoded, just returned
		//if its a row, just return an array
	}

	strngfy(){
		if(this.c=='string'){

		}else if(this.c=='buffer'){
		
		
		}else if(this.c=='row'){

		}else{
			throw Error("Strowfer is corrupted, has no context variable defined")
		}
		//if its a string, decode it if it has a encoding, and return
		//if its a buffer, decode it and return
		//if its a row, return it as a comma separated string
	}
	//
	unwrap()
}

console.log(new Strowffer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ['int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int'], 'arbitrary row data'))
console.log(new Strowffer("hello world!", 'utf-8', 'greeting'))
console.log(new Strowffer(Buffer.from([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]), 'utf-8', 'arbitrary buffer'))