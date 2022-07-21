import { Cell } from "./Cell.js"
//input
//if we iterate and fill inside the class from a constructor string, it requires a single encoding
//if we are iterating and filling from the outside of the class, we have options for encoding for dataframes
//output
//there are different usecases
export class Strow{
    constructor(strow, indx={}, cntxt='str', encdng="utf-8"){
		//if cntxt is a encoding, then its a string
		//if cntxt is 'row', with strow as a string, we cellify the string with the same encoding
		//if cntxt is 'row' with a strow as cell schema, we cellify the strow schema
		this.e;
		this.i;
		this.s;
		this.ct;
		this.cs=this.charify(strow, ctxt)

    }

	//gets the single encoded line str or row cells as arbitrary chars (that's a 'strow')
	get_strow(){
		if(this.ct=='str'){
			return this.s;
		}else if(this.ct=='row'){
			var row=[];
			this.cs.forEach((c)=>{
				row.push(c.get_cell())
			})
			return row;
		}else{
			throw Error("strow was not initialized with a context")
		}
	}

	cellify(strng, encdng){
		//creates an array of char objects
		for(var i = 0; i<strng.length; i++){
			this.push(strng[i], encdng)
		}
	}

	push_raw(rawChar, encdng){
		this.cs.push(new Char(rawChar, {'e':encdng}))
	}
	push_row(){

	}
}