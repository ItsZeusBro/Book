import * as assert from "node:assert"
import * as util from "node:util"
import * as fs from "node:fs"

//Its just a book...
export class Book{
    constructor(file, string, tools){
        this.tools=tools;
        if(file && string){
            tools=string
            string=file
            
        }
        this.string=string;
        this.book;
        this.index;//for the future!
        if(file&&string){
            this.bookify(string, this, tools);
        }else{
            this.import(file, this)
        }
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
    import(file, _Book){
        _Book.book = JSON.parse(fs.readFileSync(file))
    }
    
    exportToBookFile(_Book, fileName){
        fs.writeFileSync(fileName+'.book', JSON.stringify(_Book.book))
    }

    scrollifyBook(_Book){
        return this.scrollifyPagesNtoM(_Book)
    }

    //if you need to scrollify large ranges, your pages are too small
    scrollifyPagesNtoM(_Book, pageN, pageM){
        if(!_Book.book){
            throw Error("Book is needed for scrollify to work")
        }
        if(pageN && pageM){
            //if pageN or pageM
            return _Book._scrollifyNtoM(_Book, pageN, pageM);
        }else if(pageN){
            return _Book._scrollifyNtoM(_Book, pageN, _Book.getPageCount(_Book));
        }else if(pageM){
            return _Book._scrollifyNtoM(_Book, 0, pageM);
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

    enscribeToBook(string, _Book, tools){
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
        return {'charCount':'0', 'line':""}
    }
    _getEmptyPage(){
		return {'lineCount':'0','lines':{}, 'charOffset':'0'};
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
    _scrollifyPagesNtoM(_Book, pageN, pageM){
        var string="";
        for (var i = pageN; i<=pageM; i++){
            var page = _Book.book['pages'][i.toString()];
            for(const [lineNumber, line] of Object.entries(page['lines'])){
                string+=line;
            }
        }
        return string;
    }

    _scrollifyPageN(_Book, pageN){
        return this._scrollifyNtoM(_Book, pageN, pageN);
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

    
    _addPageToBook(page, _Book){
        _Book.book['pages'][(parseInt(_Book.book['pageCount'])+1).toString()]=page;
        _Book.book['pageCount']=(parseInt(_Book.book['pageCount'])+1).toString();
    }
    _enscribeLineToPage(line, page){
        page['lines'][(parseInt(page['lineCount'])+1).toString()]=line;
        page['lineCount']=(parseInt(page['lineCount'])+1).toString();
    }
}
