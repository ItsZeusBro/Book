import * as assert from "node:assert"
import * as util from "node:util"
import * as fs from "node:fs"
import {Page} from "./Page.js"
import {THE_ODYSSEY} from "../Cases/Books/IndividualBooks/TheOdyssey.js"
import {THE_ILIAD} from "../Cases/Books/IndividualBooks/TheIliad.js"
//Its just a buk...

//each buk has a char count per page
export class Buk{
    constructor(strng, tuls){
		this.pages = this.bukify(strng, tuls['charsPerPage'], tuls['delim']);
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
		console.log(util.inspect(this.pages, {showHidden: false, depth: null, colors: true}))
	}

	xport(fylNm){
		fs.writeFileSync(fylNm, JSON.stringify(this, null, 2))
	}

	strngfy(){
		var buk="";
		this.pages.forEach((page)=>{
			buk+=page.get_raw()
		})
		return buk;
	}
}



var buk = new Buk(THE_ODYSSEY+THE_ILIAD, {"charsPerPage":2000, "delim":'\n'});
//buk.xport('Odyssey.buk')
assert.equal(buk.strngfy(), THE_ODYSSEY+THE_ILIAD)