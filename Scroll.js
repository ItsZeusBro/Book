export class Scroll{
    constructor(string){
        this.scroll=string;
    }
    scrollify(_Book, pageN, pageM){
        if(!_Book){_Book=this;}
        return this._Scroll.scrollifyPagesNtoM(pageN, pageM, _Book)
    }

    //if you need to scrollify large ranges, your pages are too small
    scrollifyPgsNM(pageN, pageM, _Book){
        if(!_Book.book){
            throw Error("Book is needed for scrollify to work")
        }
        if(pageN && pageM){
            //if pageN or pageM
            return _Book._scrollifyPgsNM(pageN, pageM, _Book);
        }else if(pageN){
            return _Book._scrollifyPgsNM(pageN, _Book.getPageCount(_Book), _Book);
        }else if(pageM){
            return _Book._scrollifyPgsNM(0, pageM, _Book);
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
    scrollifyPgN(pageN, _Book){
        return this._scrollifyPgsNM(pageN, pageN, _Book);
    }
    
    //O(n^2) where n is the number of pages n to m, pagination should be balanced
    //to avoid performance issues
    _scrollifyPgsNM(pageN, pageM, _Book){
        if(pageN>_Book.getPageCount()||pageM>_Book.getPageCount()){
            throw Error("pages must be within range of 0 and _Book.pageCount()")
        }
        var string="";
        for (var i = pageN; i<=pageM; i++){
            var page = _Book.book['pages'][i.toString()];
            for(const [lineNumber, line] of Object.entries(page['lines'])){
                string+=line;
            }
        }
        return string;
    }




}