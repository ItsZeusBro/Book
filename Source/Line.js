import { Char } from "./Char"

export class Line{
    constructor(strng, indx, encdng){
		this.indx=indx;
		this.chars=this.charify(strng, encdng);
    }

	charify(strng, encdng){
		//creates an array of char objects
		var chars=[];
		for(var i = 0; i<strng.length; i++){
			this.push(strng[i])
		}
		return chars;
	}

	get_raw(){
		var line="";
		this.chars.forEach((char)=>{
			line+=char.get_raw()
		})
		return line;
	}
	push(rawChar){
		this.chars.push(new Char(rawChar, {'encdng':encdng}))
	}
	
}