import { Char } from "./Char.js"
//input
//if we iterate and fill inside the class from a constructor string, it requires a single encoding
//if we are iterating and filling from the outside of the class, we have options for encoding for dataframes
//output
//there are different usecases
export class Line{
    constructor(strow, indx={}, cntxt='utf-8'){
		//if cntxt is a encoding, then its a string
		//if cntxt is 'row', we don't hold a string, we charify the strow schema
		this.e;
		this.i;
		this.s;
		this.cs;

    }

	//gets the single encoded line str or row cells as arbitrary chars (that's a 'strow')
	get_strow(){
		if(cntxt=='str'){
			
		}
		var line="";
		this.cs.forEach((c)=>{
			line+=c.get_raw()
		})
		return line;
	}

	charify(strng, encdng){
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