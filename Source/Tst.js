import {Buk} from "./Buk.js"
import * as util from "node:util"
import * as assert from "node:assert"
// import {MOBY_DICK} from "./Cases/Books/IndividualBooks/MobyDick.js"
import {THE_ILIAD} from "../Cases/Books/IndividualBooks/TheIliad.js"
import {THE_ODYSSEY} from "../Cases/Books/IndividualBooks/TheOdyssey.js"


class TestBook{
	constructor(){
		var _Buk = this.imprt()
		
		//this.exportToBookFile(100)
		//this.matchOnPageRange()
		//this.stressTest(1,26049)
		
	}
	matchOnPageRange(){
		var _Book = this.importBookFile(100)
		console.log(_Book.matchOnPageRange(/Zeus/, 251, 254, _Book))
	}
	stressTest(n, m){
		for(var lineCount = n; lineCount< m; lineCount++){
			console.log(lineCount)
			this.scrollify(lineCount)
			this.enscribeToBook(lineCount)
			this.getPageCount(lineCount)
			this.getLineCount(lineCount)
			// //TEMPORARY CLEAR BOX TEST UNTIL WE USE IT
			this._popNPagesFrom(lineCount)
			this._removePagesNtoM(lineCount)
		}
	}

	imprt(lineCount){
		console.log("IMPORT BOOK TEST")

		var _Buk = new Buk('TheIlliad.buk')
		return _Buk;
	}
	exportToBookFile(lineCount){
		console.log("EXPORT BOOK TEST")

		var _Book = new Book(THE_ILIAD, {'lineCount':lineCount, 'anchor': '\n'});
		_Book.exportToBookFile("TheIliad", _Book);
	}
	createBook(lineCount){
		console.log("CREATE BOOK TEST")

		var _Book = new Book(THE_ILIAD, {'lineCount':lineCount, 'anchor': '\n'});
		//_Book.printBook(_Book)
		return _Book
	}

	scrollify(lineCount){
		console.log("SCROLLIFY TEST")
		var _Book = new Book(THE_ILIAD, {'lineCount':lineCount, 'anchor': '\n'});
		assert.equal(THE_ILIAD, _Book.scrollify(_Book));
	}

	enscribeToBook(lineCount){
		console.log("ENSCRIBE TO BOOK TEST")

		var _Book = new Book(THE_ILIAD, {'lineCount':lineCount, 'anchor': '\n'});
		_Book.enscribeToBook(THE_ODYSSEY, {'lineCount':lineCount, 'anchor': '\n'}, _Book);
		assert.equal(THE_ILIAD+THE_ODYSSEY, _Book.scrollify(_Book));
	}

	//probabalistic token match (specify how many pages to search through)
	nextToken(lineCount){
		console.log("NEXT TOKEN TEST")

		//specify number of lines, that will determine the number of pages searched on
		var _Book = new Book(THE_ILIAD, {'lineCount':lineCount, 'anchor': '\n'})

	}

	getPageCount(lineCount){
		console.log("GET PAGE COUNT TEST")

		//every string has n number of newlines
		//we can divide that by 100 here, to get the number of pages
		var count=0
		for(var i = 0; i<THE_ILIAD.length; i++){
			if(THE_ILIAD[i]=='\n'){
				count+=1;
			}
		}
		var expectedPageCount=count/lineCount;
		if(this._isFloat(expectedPageCount)){
			expectedPageCount=Math.trunc(expectedPageCount)+1
		}else if(count == lineCount){
			//?why do we need two pages if the newline count == the lineCount per page
			//because there is an end of string at the end of each string
			expectedPageCount+=1
		}
		var _Book = new Book(THE_ILIAD, {'lineCount':lineCount, 'anchor': '\n'})
		_Book.printBook()
		assert.equal(expectedPageCount, _Book.getPageCount(_Book))
	}

	_isFloat(n){
		return Number(n) === n && n % 1 !== 0;
	}

	getLineCount(lineCount){
		console.log("GET LINE TEST")

		var count=0
		for(var n = 0; n<THE_ILIAD.length; n++){
			if(THE_ILIAD[n]=='\n'){
				//its paginating on '\n' meaning there is an extra string in the buffer
				//represented by end of string that we are pushing
				count+=1;
			}
		}
		var _Book = new Book(THE_ILIAD, {'lineCount':lineCount, 'anchor': '\n'})
		//we need to check the first and last page
		//expected 100 for first page
		if(lineCount<=_Book.getLineCount(_Book.book['pages']['1'])){
			//because the linecount is not going to equal the getLineCount if it is greater
			assert.equal(lineCount, _Book.getLineCount(_Book.book['pages']['1']))
			//_Book.printBook(_Book)
			assert.equal((count%lineCount)+1, _Book.getLineCount(_Book.book['pages'][_Book.getPageCount(_Book).toString()]))

		}
		
	}

	//TEMPORARY Clear Box test until we use it
	_popNPagesFrom(lineCount){
		console.log("POP N PAGES FROM")

		var _Book = new Book(THE_ILIAD, {'lineCount':lineCount, 'anchor': '\n'})
		var originalPageCount = _Book.getPageCount(_Book)
		_Book._popNPagesFrom(10, _Book)
		assert.equal(_Book.getPageCount(_Book), originalPageCount-10) //this is just a pop operation
		//not a range operation, so there is no inclusive case we need to worry about 
	}

	_removePagesNtoM(lineCount){
		console.log("REMOVE PAGES N TO M")
		var _Book = new Book(THE_ILIAD, {'lineCount':lineCount, 'anchor': '\n'})
		var pageCount = _Book.getPageCount(_Book)
		_Book._removePagesNtoM(10, 20, _Book)
		assert.equal(pageCount-11, _Book.getPageCount(_Book))
	}
}


new TestBook()
// var regex=/.*((\r\n)|(\n)|(\r\n$))/ //((\r\n)|(\n)|(\r\n$))/
// console.log('The Project Gutenberg eBook of Moby-Dick; or The Whale, by Herman MelvilleThis eBook is for the use of anyone anywhere in the United States andmost other parts of the world at no cost and with almost no restrictionswhatsoever. You may copy it, give it away or re-use it under the termsof the Project Gutenberg License included with this eBook or online atwww.gutenberg.org. If you are not located in the United States, youwill have to check the laws of the country where you are located beforeusing this eBook.Title: Moby-Dick; or The WhaleAuthor: Herman MelvilleRelease Date: June, 2001 [eBook #2701][Most recently updated: August 18, 2021]Language: EnglishCharacter set encoding: UTF-8Produced by: Daniel Lazarus, Jonesey, and David Widger*** START OF THE PROJECT GUTENBERG EBOOK MOBY-DICK; OR THE WHALE ***\n'.match(regex));
