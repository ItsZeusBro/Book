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