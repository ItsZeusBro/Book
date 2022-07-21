import { Char } from "./Char.js"

export class Line{
    constructor(strng, indx={}, encdng='utf-8'){
		this.e=encdng;
		this.i=indx;
		this.s=strng

    }

	get_raw(){
		return this.s
	}

	
}

import { Char } from "./Char.js"

export class Line{
    constructor(strng, indx={}, encdng='utf-8'){
		this.encdng=encdng;
		this.indx=indx;
		this.chars=[]
		this.charify(strng, encdng);
    }

	charify(strng, encdng){
		//creates an array of char objects
		for(var i = 0; i<strng.length; i++){
			this.push(strng[i], encdng)
		}
	}

	get_raw(){
		var line="";
		this.chars.forEach((char)=>{
			line+=char.get_raw()
		})
		return line;
	}
	push(rawChar){
		this.chars.push(new Char(rawChar, {'encdng':this.encdng}))
	}
	
}