import {Line} from "./Line.js"

//each page is created by a Buk with n number of chars per page
//the delim is what represents the ending of a logical line that are terminated arbitrarily
export class Page{
    constructor(strng, delim){
        this.ls=this.linify(strng, delim);
    }

	linify(strng, delim){
		var lines=[];
		var _Line;
		var _strng="";
		for(var i=0; i<strng.length; i++){
			if(strng[i]==delim){
				_strng+=strng[i];
				_Line = new Line(_strng);
				lines.push(_Line);
				_strng=""
			}else{
				_strng+=strng[i];
			}
		}
		if(_strng!=""){
			lines.push(new Line(_strng))
		}
		return lines
	}

	push(strng){
		var _Line=new Line(strng);
		this.ls.push(_Line);
	}
	get_raw(){
		var page="";
		this.ls.forEach((line)=>{
			page+=line.get_raw()
		})
		return page;
	}
}
