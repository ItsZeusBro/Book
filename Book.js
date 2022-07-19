import * as assert from "node:assert"
import * as util from "node:util"

//Its just a book...
export class Book{
    constructor(string, tools){
        this.string=string;
        this.tools=tools;
		this.pages;
        this.book;
        this.index;//for the future!
		this.bookify(string, this, tools);
    }

    //PUBLIC GETTERS
    getPageCount(_Book){
		return parseInt(_Book.book['pageCount']);
	}
	getLineCount(page){
        return parseInt(page['lineCount']);
    }

    //PUBLIC UTILS
    bookify(string, _Book, tools){
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
				//LEAVE THIS -1 after tools['lineCount'] because we are looking for the last push to the queue!
				if(string[i]==tools['anchor'] && this.getLineCount(page)==tools['lineCount']-1){
					line+=string[i];	//adds the anchor to the string
					this._pushLineToPage(line, page);
                    this._setCharOffsetToPage(i, page);
					this._pushPageToBook(page, _Book);
					page=this._getEmptyPage();
					line="";
				//LEAVE THIS -1 after tools['lineCount'] because we are looking for anything BEFORE THE LAST PUSH TO THE QUEUE!
				}else if(string[i]==tools['anchor'] && this.getLineCount(page)<tools['lineCount']-1){
					line+=string[i];	//adds the anchor to the string
                    this._pushLineToPage(line, page);
					line="";
				}else{
					line+=string[i];
				}
        	}
			//THIS IS ALWAYS HIDDEN
            this._pushLineToPage(line, page);
			this._pushPageToBook(page, _Book);
		}
	}

    stringifyBook(_Book){
        return this.stringifyPagesNtoM(_Book)
    }

    //if you need to stringify large ranges, your pages are too small
    stringifyPagesNtoM(_Book, pageN, pageM){
        if(!_Book.book){
            throw Error("Book is needed for stringify to work")
        }
        if(pageN && pageM){
            //if pageN or pageM
            return _Book._stringifyNtoM(_Book, pageN, pageM);
        }else if(pageN){
            return _Book._stringifyNtoM(_Book, pageN, _Book.getPageCount(_Book));
        }else if(pageM){
            return _Book._stringifyNtoM(_Book, 0, pageM);
        }else{
            var string="";
            for (const [pageNumber, page] of Object.entries(_Book.book['pages'])) {
                for (const [lineNumber, line] of Object.entries(page['lines'])){
                    string+=line;
                }
            }    
            return string;
        }
    }

    pushStringToBook(string, _Book, tools){
        if(!string && !_Book.book){
            throw Error("you need to provide a string and a book");
        }
        if(!tools){
            tools=this.tools;
        }
		this.bookify(string, _Book, tools);
	}

    printBook(_Book){
		console.log(util.inspect(_Book.book, {showHidden: true, depth: null, colors: true}));
	}

    //PRIVATE GETTERS
    _getLineNFromPageM(_Book, pageM, lineN){
        return this.getPageN(_Book, pageM)['lines'][lineN.toString];
    }
    _getPageN(_Book, pageN){
        return _Book.book['pages'][pageN.toString()];
    }

    _getEmptyLine(){
        return {'charCount':0, 'line':""}
    }
    _getEmptyPage(){
		return {'lineCount':'0','lines':{}, 'charOffset':0};
	}
	_getEmptyBook(){
		return {'pageCount':'0','pages':{}};
	}
    
    //PRIVATE SETTERS
    _setCharOffsetToPage(offset, page){
        
    }

   //PRIVATE UTILS
    
    //O(n^2) where n is the number of pages n to m, pagination should be balanced
    //to avoid performance issues
    _stringifyPagesNtoM(_Book, pageN, pageM){
        var string="";
        for (var i = pageN; i<=pageM; i++){
            var page = _Book.book['pages'][i.toString()];
            for(const [lineNumber, line] of Object.entries(page['lines'])){
                string+=line;
            }
        }
        return string;
    }

    _stringifyPageN(_Book, pageN){
        return this._stringifyNtoM(_Book, pageN, pageN);
    }


    _removePagesNtoM(_Book, pageN, pageM){
		assert.equal(pageM>=pageN, true);
		for (var i=pageN; i<=pageM; i++){
			this._removePageN(_Book, i);
		}
	}

	_removePageN(_Book, n){
		delete _Book.book['pages'][n.toString()];
		var tmp = _Book.book['pages'][(n+1).toString()];
		delete _Book.book['pages'][(n+1).toString()];
		_Book.book['pages'][n.toString()]=tmp;
		_Book.book['pageCount']=(parseInt(_Book.book['pageCount'])-1).toString();
	}

    
    //this should be tested when its actually used, leave it here for now.
    _popNPagesFrom(nPages, _Book){
		for(var i = 0; i<nPages; i++){
			this._popPageFromBook(_Book);
		}
	}
	
    _popPageFromBook(_Book){
        delete _Book.book['pages'][_Book.book['pageCount']]; 
        _Book.book['pageCount']=(parseInt(_Book.book['pageCount'])-1).toString();
    }

    
    _pushPageToBook(page, _Book){
        _Book.book['pages'][(parseInt(_Book.book['pageCount'])+1).toString()]=page;
        _Book.book['pageCount']=(parseInt(_Book.book['pageCount'])+1).toString();
    }
    _pushLineToPage(line, page){
        page['lines'][(parseInt(page['lineCount'])+1).toString()]=line;
        page['lineCount']=(parseInt(page['lineCount'])+1).toString();
    }
}
