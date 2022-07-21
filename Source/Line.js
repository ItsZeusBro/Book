import { Char } from "./Char.js"

export class Line{
    constructor(strng, indx={}, encdng='utf-8'){
		this.e=encdng;
		this.i=indx;
		this.s=strng
		this.cs;
		if(!optimized){
			this.s=""
			this.charify(strng, encdng);
		}
    }

	get_raw_opt(){
		return this.s
	}

	get_raw(){
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

	push(rawChar){
		this.cs.push(new Char(rawChar, {'e':this.e}))
	}
}