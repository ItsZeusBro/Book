export class Cell{
    constructor(c, m){
        this.c=c;
		this.m=m;
    }
	get_cell(){
		return this;
	}
	get_encdng(){
		return this.m['e'];
	}
	get_raw(){
		return this.c;
	}
}