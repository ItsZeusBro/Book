import {Buk} from "./Buk.js"
import * as util from "node:util"
import * as assert from "node:assert"
// import {MOBY_DICK} from "./Cases/Books/IndividualBooks/MobyDick.js"
import {THE_ILIAD} from "../Cases/Books/IndividualBooks/TheIliad.js"
import {THE_ODYSSEY} from "../Cases/Books/IndividualBooks/TheOdyssey.js"


class TestBook{
	constructor(){
		var _Buk = this.imprt()

		// console.log((BOOKS+BOOKS+BOOKS+BOOKS).length)
		// var buk = new Buk(BOOKS+BOOKS+BOOKS+BOOKS, {"charsPerPage":10000, "delim":'\n'});
		// buk.prnt_n_bytes()
		// buk.xport('Books.buk')
		// assert.equal(buk.strngfy(), BOOKS)
	}
	
}


new TestBook()
// var regex=/.*((\r\n)|(\n)|(\r\n$))/ //((\r\n)|(\n)|(\r\n$))/
// console.log('The Project Gutenberg eBook of Moby-Dick; or The Whale, by Herman MelvilleThis eBook is for the use of anyone anywhere in the United States andmost other parts of the world at no cost and with almost no restrictionswhatsoever. You may copy it, give it away or re-use it under the termsof the Project Gutenberg License included with this eBook or online atwww.gutenberg.org. If you are not located in the United States, youwill have to check the laws of the country where you are located beforeusing this eBook.Title: Moby-Dick; or The WhaleAuthor: Herman MelvilleRelease Date: June, 2001 [eBook #2701][Most recently updated: August 18, 2021]Language: EnglishCharacter set encoding: UTF-8Produced by: Daniel Lazarus, Jonesey, and David Widger*** START OF THE PROJECT GUTENBERG EBOOK MOBY-DICK; OR THE WHALE ***\n'.match(regex));


//search()	
//sort()
//read()
//export()
//import()
//buffer()
//parse()
//translate()
//get()

//literal searching (absolute equality)
//on pages, lines, and chars 
//	an array of Index Objects would be returned

//pattern searching (granularity matters here)
//on pages, lines, and chars (chars is a very exhaustive search)

//ordinal searching
//on pages, lines, and chars (number ranges (indefinite ranges) on pages, lines, and chars)

//Logical searching
//searching on semantics using Indexes built by NLP or realtime NLP searches on the book file

//sorting
//This refers to virtual sorting for reading and logical file exports
//