import * as assert from "node:assert"
import * as util from "node:util"
import * as fs from "node:fs"

//Every line needs a map to the original file location
//A size field (for choosing the most efficent search types)
//Some sort of indexing metadata

//Pages can be delimited by a litteral, or a pattern (you don't suffer regex performance hit more than once
//if you store into book file)

//Pages can be delimited by a byte or bit count (with a bitty count)
//(a bitty count is the number of bits at the end of a bit buffer that allows it to be an Octal 
//compliant buffer)
//it matters because you might be parsing nibbles or actual bit patterns and not necessarily
//byte patterns, but you still need the return of a page to be octal for processing

//Chapters are meant for loose association virtual indexing.
//Pages are are meant for closer NLP associations
//Line ordering can be optimized for even faster searches, or for helping humans visualize a page
//or chapter...
//This can index the entire world of information (maybe even dna)
// "Library":{
//     "book index":{

//     },
//     "book":{
//         "chapter_index":{
    
//         },
//         //chapter 1
//         "1":{
//             "page_index":{
    
//             },
//             "pages":{
//                 "line_index":{
    
//                 },
//                 "lines":{
//                     "1":{
    
//                     }
                
//                 }
//             },
//         },
//         //chapter 2
//         "2":{
//             "page_index":{
    
//             },
//             "pages":{
//                 "line_index":{
                    
//                 },
    
//             },
//         }
    
//     }
// }

//well formed book files should be indexed first in the world of information
//then something more general can be indexed second
export class Library {
    constructor(){

    }

}



//Its just a book...
export class Book{
    constructor(file, string, tools){
        this.tools=tools;
        this._Scroll=new Scroll()
        if(file && string){
            tools=string
            string=file
        }
        this.string=string;
        this.book;
        this.index;//for the future!
        if(file&&string){
            this.bookify(string, tools, this);
        }else{
            this.import(file, this)
        }

    }

    //PUBLIC GETTERS
    getPageCount(_Book){
        if(!_Book){_Book=this;}
		return parseInt(_Book.book['pageCount']);
	}
	getLineCount(page){
        return parseInt(page['lineCount']);
    }

    //PUBLIC UTILS
    bookify(string, tools, _Book){
        if(!_Book){_Book=this;}
		if(!(string&&tools)){
			tools = this.tools;
		}
		if(!_Book.book){
			_Book.book=this._getEmptyBook();
		}
		var page=this._getEmptyPage();

        if(('lineCount' in tools)&&('anchor' in tools)){
            var line="";
            for(var i=0; i<string.length; i++){
				//LEAVE THIS -1 after tools['lineCount'] because we are looking for the last enscribe to the queue!
				if(string[i]==tools['anchor'] && this.getLineCount(page)==tools['lineCount']-1){
					line+=string[i];	//adds the anchor to the string
					this._enscribeLineToPage(line, page);
                    this._setCharOffsetToPage(i, page);
					this._addPageToBook(page, _Book);
					page=this._getEmptyPage();
					line="";
				//LEAVE THIS -1 after tools['lineCount'] because we are looking for anything BEFORE THE LAST enscribe TO THE QUEUE!
				}else if(string[i]==tools['anchor'] && this.getLineCount(page)<tools['lineCount']-1){
					line+=string[i];	//adds the anchor to the string
                    this._enscribeLineToPage(line, page);
					line="";
				}else{
					line+=string[i];
				}
        	}
			//THIS IS ALWAYS HIDDEN
            this._enscribeLineToPage(line, page);
			this._addPageToBook(page, _Book);
		}
	}
    import(file, _Book, virtualize=false){
        if(!_Book){_Book=this;}
        _Book.book = JSON.parse(fs.readFileSync(file))
    }
    exportToBookFile(fileName, _Book){
        if(!_Book){_Book=this;}
        fs.writeFileSync(fileName+'.book', JSON.stringify(_Book.book))
    }
    

    virtualize(string){
        
    }

    

    enscribeToBook(string, tools, _Book){
        if(!_Book){_Book=this;}
        if(!string && !_Book.book){
            throw Error("you need to provide a string and a book");
        }
        if(!tools){
            tools=this.tools;
        }
		this.bookify(string, tools, _Book);
	}

    printBook(_Book){
        if(!_Book){_Book=this;}
		console.log(util.inspect(_Book.book, {showHidden: true, depth: null, colors: true}));
	}

    //PRIVATE GETTERS
    _getLineNFromPageM(pageM, lineN, _Book){
        if(!_Book){_Book=this;}
        return this.getPageN(pageM, _Book)['lines'][lineN.toString];
    }

    _getPageN(pageN, _Book){
        if(!_Book){_Book=this;}
        return _Book.book['pages'][pageN.toString()];
    }

    _getEmptyLine(){
        return {'charCount':'0', 'line':""}
    }
    _getEmptyPage(){
		return {'lineCount':'0','lines':{}, 'charOffset':'0'};
	}
	_getEmptyBook(){
		return {'pageCount':'0','pages':{}};
	}
    
    //PRIVATE SETTERS

    
   //PRIVATE UTILS
    
    
    _removePagesNtoM(pageN, pageM, _Book){
        if(!_Book){_Book=this;}
		assert.equal(pageM>=pageN, true);
		for (var i=pageN; i<=pageM; i++){
			this._removePageN(i, _Book);
		}
	}

	_removePageN(n, _Book){
        if(!_Book){_Book=this;}
		delete _Book.book['pages'][n.toString()];
		var tmp = _Book.book['pages'][(n+1).toString()];
		delete _Book.book['pages'][(n+1).toString()];
		_Book.book['pages'][n.toString()]=tmp;
		_Book.book['pageCount']=(parseInt(_Book.book['pageCount'])-1).toString();
	}

    
    //this should be tested when its actually used, leave it here for now.
    _popNPagesFrom(nPages, _Book){
        if(!_Book){_Book=this;}
		for(var i = 0; i<nPages; i++){
			this._popPageFromBook(_Book);
		}
	}
	
    _popPageFromBook(_Book){
        if(!_Book){_Book=this;}
        delete _Book.book['pages'][_Book.book['pageCount']]; 
        _Book.book['pageCount']=(parseInt(_Book.book['pageCount'])-1).toString();
    }

    
    _addPageToBook(page, _Book){
        if(!_Book){_Book=this;}
        _Book.book['pages'][(parseInt(_Book.book['pageCount'])+1).toString()]=page;
        _Book.book['pageCount']=(parseInt(_Book.book['pageCount'])+1).toString();
    }
    _enscribeLineToPage(line, page){
        page['lines'][(parseInt(page['lineCount'])+1).toString()]=line;
        page['lineCount']=(parseInt(page['lineCount'])+1).toString();
    }
}
