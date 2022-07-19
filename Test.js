import {Finding} from "../Finding.js"
import {Sherlock, Book} from "../../Sherlock.js"
import {CHAR, WORD, LINE} from "../Patterns/Patterns.js"
import * as util from "node:util"
import * as assert from "node:assert"
// import {MOBY_DICK} from "./Cases/Books/IndividualBooks/MobyDick.js"
import {THE_ILIAD} from "./Cases/Books/IndividualBooks/TheIliad.js"
import {THE_ODYSSEY} from "./Cases/Books/IndividualBooks/TheOdyssey.js"

import {HALF_BOOKS} from "./Cases/Books/HalfBooks.js"
//import {BOOKS} from "./Cases/Books/Books.js"


class TestBook{
	constructor(){
		for(var i = 20000; i< 30000; i++){
			console.log(i)
			var _Book=this.createBook(i)
			console.log(_Book.pageCount(_Book))
			this.stringify(i)
			this.pushStringToBook(i)
			this.pageCount(i)
			this.lineCount(i)
			// //TEMPORARY CLEAR BOX TEST UNTIL WE USE IT
			this._popNPagesFrom(i)
			this._removePagesNtoM(i)
		}
		

	}

	createBook(i){
		var _Book = new Book(THE_ILIAD, {'lineCount':i, 'anchor': '\n'})//, 'pageLookAhead':true});
		//_Book.printBook(_Book)
		return _Book
	}

	stringify(i){
		var _Book = new Book(THE_ILIAD, {'lineCount':i, 'anchor': '\n'})//, 'pageLookAhead':true});
		assert.equal(THE_ILIAD, _Book.stringify(_Book));
		
		assert.equal(THE_ILIAD, _Book.stringify(_Book));
	}

	pushStringToBook(i){
		var _Book = new Book(THE_ILIAD, {'lineCount':i, 'anchor': '\n'})//, 'pageLookAhead':true});
		_Book.pushStringToBook(THE_ODYSSEY, _Book, {'lineCount':i, 'anchor': '\n'});
		assert.equal(THE_ILIAD+THE_ODYSSEY, _Book.stringify(_Book));
	}

	//probabalistic token match (specify how many pages to search through)
	nextToken(i){
		//specify number of lines, that will determine the number of pages searched on
		var _Book = new Book(THE_ILIAD, {'lineCount':i, 'anchor': '\n'})

	}

	pageCount(i){
		//every string has n number of newlines
		//we can divide that by 100 here, to get the number of pages
		var count=0
		for(var i = 0; i<THE_ILIAD.length; i++){
			if(THE_ILIAD[i]=='\n'){
				count+=1;
			}
		}
		var expectedPageCount=count/i;
		if(this._isFloat(expectedPageCount)){
			expectedPageCount=Math.trunc(expectedPageCount)+1
		}
		var _Book = new Book(THE_ILIAD, {'lineCount':i, 'anchor': '\n'})//, 'pageLookAhead':true});
		assert.equal(expectedPageCount, _Book.pageCount(_Book))
	}

	_isFloat(n){
		return Number(n) === n && n % 1 !== 0;
	}

	lineCount(i){
		var count=0
		for(var n = 0; n<THE_ILIAD.length; n++){
			if(THE_ILIAD[n]=='\n'){
				//its paginating on '\n' meaning there is an extra string in the buffer
				//represented by end of string that we are pushing
				count+=1;
			}
		}
		var _Book = new Book(THE_ILIAD, {'lineCount':i, 'anchor': '\n'})//, 'pageLookAhead':true});
		//we need to check the first and last page
		//expected 100 for first page
		assert.equal(i, _Book.lineCount(_Book.book['pages']['1']))
		//_Book.printBook(_Book)
		assert.equal((count%i)+1, _Book.lineCount(_Book.book['pages'][_Book.pageCount(_Book).toString()]))

	}

	//TEMPORARY Clear Box test until we use it
	_popNPagesFrom(i){
		var _Book = new Book(THE_ILIAD, {'lineCount':i, 'anchor': '\n'})//, 'pageLookAhead':true});
		var originalPageCount = _Book.pageCount(_Book)
		_Book._popNPagesFrom(10, _Book)
		assert.equal(_Book.pageCount(_Book), originalPageCount-10) //this is just a pop operation
		//not a range operation, so there is no inclusive case we need to worry about 
	}
	_removePagesNtoM(i){
		var _Book = new Book(THE_ILIAD, {'lineCount':i, 'anchor': '\n'})//, 'pageLookAhead':true});
		var pageCount = _Book.pageCount(_Book)
		_Book._removePagesNtoM(_Book, 10, 20)
		assert.equal(pageCount-11, _Book.pageCount(_Book))
	}



}


new TestBook()
// var regex=/.*((\r\n)|(\n)|(\r\n$))/ //((\r\n)|(\n)|(\r\n$))/
// console.log('The Project Gutenberg eBook of Moby-Dick; or The Whale, by Herman MelvilleThis eBook is for the use of anyone anywhere in the United States andmost other parts of the world at no cost and with almost no restrictionswhatsoever. You may copy it, give it away or re-use it under the termsof the Project Gutenberg License included with this eBook or online atwww.gutenberg.org. If you are not located in the United States, youwill have to check the laws of the country where you are located beforeusing this eBook.Title: Moby-Dick; or The WhaleAuthor: Herman MelvilleRelease Date: June, 2001 [eBook #2701][Most recently updated: August 18, 2021]Language: EnglishCharacter set encoding: UTF-8Produced by: Daniel Lazarus, Jonesey, and David Widger*** START OF THE PROJECT GUTENBERG EBOOK MOBY-DICK; OR THE WHALE ***\n'.match(regex));
