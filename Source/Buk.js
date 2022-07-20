import * as assert from "node:assert"
import * as util from "node:util"
import * as fs from "node:fs"
import {Page} from "./Page.js"
import {THE_ODYSSEY} from "../Cases/Books/IndividualBooks/TheOdyssey.js"
import {THE_ILIAD} from "../Cases/Books/IndividualBooks/TheIliad.js"
import {BOOKS} from "../Cases/Books/Books.js"
//Its just a buk...

//each buk has a char count per page
export class Buk{
    constructor(strng, tuls){
		this.ps = this.bukify(strng, tuls['charsPerPage'], tuls['delim']);
    }

	//PUBLIC UTILS
	bukify(strng, charsPerPage, delim){
		var pages=[];
		//slice the string every charsPerPage
		var str=strng
		var j=0;
		while(j<strng.length){
			str=strng.slice(j, j+charsPerPage);
			pages.push(new Page(str, delim));
			j+=charsPerPage;
		}
		return pages;
	}

	prnt(){
		console.log(util.inspect(this.ps, {showHidden: false, depth: null, colors: true}))
	}

	xport(fylNm){
		
		fs.writeFileSync(fylNm, JSON.stringify(this))
	}
	prnt_n_bytes(){
		console.log(JSON.stringify(this).length)
	}
	strngfy(){
		var buk="";
		this.ps.forEach((page)=>{
			buk+=page.get_raw()
		})
		return buk;
	}
}


// console.log((BOOKS+BOOKS+BOOKS+BOOKS).length)
// var buk = new Buk(BOOKS+BOOKS+BOOKS+BOOKS, {"charsPerPage":10000, "delim":'\n'});
// buk.prnt_n_bytes()
// buk.xport('Books.buk')
// assert.equal(buk.strngfy(), BOOKS)