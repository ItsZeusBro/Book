//w3 explanation:
//Sometimes more than one byte is used to represent a single character.
//Characters that are needed for a specific purpose are grouped into a character set (also called a repertoire). 
//(To refer to characters in an unambiguous way, each character is associated with a number, called a code point.)
//A character encoding provides a key to unlock (ie. crack) the code. 
//It is a set of mappings between the bytes in the computer and the characters in the character set. 
//Without the key, the data looks like garbage
//So, when you input text using a keyboard or in some other way, the character encoding maps characters you choose 
//to specific bytes in computer memory, and then to display the text it reads the bytes back into characters.


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

//a word can be a byte, a collection of bytes, a char word delimited with a space, and Cells can fit many words//
export class Word{

}