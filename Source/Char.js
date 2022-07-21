export class Char{
    constructor(char, meta){
        this.char=char;
		this.meta=meta;
    }
	get_char(){
		return this;
	}
	get_encdng(){
		return this.meta['encdng'];
	}
	get_raw(){
		return this.char;
	}
}