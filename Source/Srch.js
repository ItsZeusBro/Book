import { Scroll } from "./Scroll";

export class Search{
    constructor(){
        this._Scroll=new Scroll();
    }
    //calls regex once on every n pages (non-cumulative way), and returns the first non null regex value
    srchEvryNPgs(nPages, first=true){
		var i;
		var matches = []
        for(var i = 1; i<=this.pageCount(); i++){
            if(i+nPages>this.pageCount()){
                return matches
            }else{
                matches.push(_Book.srchPgRange(regex, i, i+nPages, _Book))
            }
        }
        return matches;
    }

    //calls regex once on n pages (in cumulative way), and returns the first non null regex value
    srchEvryNPgsCmltv(nPages){

    }
    //calls regex once on a page range, and returns the regex return value
    srchPgRange(regex, pageN, pageM, _Book){
        if(!_Book){_Book=this;}
        var scroll = this._Scroll.scrollifyPgsNM(pageN, pageM, _Book)
        return scroll.match(regex)
	}

    
}