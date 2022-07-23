export class Cell{
	//type can  be anything, and if we don't support the type, it just looks like whatever comes in	
	constructor(val, enc, indx){
		this.v=val
		this.e=enc
		this.i=indx
	}
}