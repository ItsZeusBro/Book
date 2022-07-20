import * as assert from "node:assert"
import * as util from "node:util"
import * as fs from "node:fs"
import {Scroll} from "./Scroll.js"

//Its just a book...
export class Book{
    constructor(file, string, tools){
		this.index;
		this.pages;
		if(!string){
			this.index=tools['index'];
			this.pages=tools['pages'];
		}

    }

    //PUBLIC GETTERS
    getPageCount(){
		return parseInt(this.book['pageCount']);
	}
	getLineCount(page){
        return parseInt(page['lineCount']);
    }

    //PUBLIC UTILS
    bookify(string, tools){
		if(!(string&&tools)){
			tools = this.tools;
		}
		if(!this.book){
			this.book=this._getEmptyBook();
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
					this._addPageToBook(page);
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
			this._addPageToBook(page);
		}
	}

    import(file){
        this.book = JSON.parse(fs.readFileSync(file))
    }
    export(fileName){
        fs.writeFileSync(fileName+'.book', JSON.stringify(this.book))
    }
    
    virtualize(string){
        
    }
	crssRef(_Book){

	}

    write2Bk(string, tools){
        if(!string){
            throw Error("you need to provide a string");
        }
        if(!tools){
            tools=this.tools;
        }
		this.bookify(string, tools);
	}

    printBk(){
		console.log(util.inspect(this.book, {showHidden: true, depth: null, colors: true}));
	}

    //PRIVATE GETTERS
    getLnNPgM(pageM, lineN){
        return this.getPageN(pageM, this)['lines'][lineN.toString];
    }

    getPgN(pageN){
        return this.book['pages'][pageN.toString()];
    }

    _getEmtyLn(){
        return {'charCount':'0', 'line':""}
    }
    _getEmtyPg(){
		return {'lineCount':'0','lines':{}, 'charOffset':'0'};
	}
	_getEmtyBk(){
		return {'pageCount':'0','pages':{}};
	}
    
    rmvPgsNM(pageN, pageM){
		assert.equal(pageM>=pageN, true);
		for (var i=pageN; i<=pageM; i++){
			this._rmvPgN(i);
		}
	}

	rmvPgN(n){
		delete this.book['pages'][n.toString()];
		var tmp = this.book['pages'][(n+1).toString()];
		delete this.book['pages'][(n+1).toString()];
		this.book['pages'][n.toString()]=tmp;
		this.book['pageCount']=(parseInt(this.book['pageCount'])-1).toString();
	}

    //this should be tested when its actually used, leave it here for now.
    popNPgs(nPages){
		for(var i = 0; i<nPages; i++){
			this._popPg();
		}
	}
	
    popPg(){
        delete this.book['pages'][this.book['pageCount']]; 
    	this.book['pageCount']=(parseInt(this.book['pageCount'])-1).toString();
    }

    _pushPg(page){
        this.book['pages'][(parseInt(this.book['pageCount'])+1).toString()]=page;
        this.book['pageCount']=(parseInt(this.book['pageCount'])+1).toString();
    }
    _enscribeLineToPage(line, page){
        page['lines'][(parseInt(page['lineCount'])+1).toString()]=line;
        page['lineCount']=(parseInt(page['lineCount'])+1).toString();
    }
}