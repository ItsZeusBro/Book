//a Node Buffer is just an array of decimals that represent byte values, and can be mapped to their original encoding
//They use decimal values because they are already represented in memory as bytes, but are more efficiently represented
//at a higher level as decimal

export class WordCell{
    constructor(bufr, encdng){
		//a bufr is an array of bytes
		//if you knew the encdng of a string of text, why would you ever put things with multiple encodings in the same wordcell?
		//you wouldn't. So, encdng only represents the entire buffer's encoding here.
		this.encdng=encdng
		this.wc=bufr
	}

	stringify(bufr){
		console.log(bufr.toString(this.encdng))
	}
}