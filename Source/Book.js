import * as assert from "node:assert"
import * as util from "node:util"
import * as fs from "node:fs"
import {Scroll} from "./Scroll.js"
//gt_ = getters
//st_ = setters
//2 serves as an underscore that means "to"
//updt_ = updaters
//pg = page
//ln = line
//cnt = count
//bukify = bookify
//mport = import
//eport = export
//crss_rf = cross reference
//wrt2buk = write to book
//prnt_buk = print book
//psh_pg = push page
//vrtlz = virtualize
//gt_mty_ln = get empty line

//If you have a variable that refers to the number of the 
//preceding object just append the variable in camelCase
//For example:
//gt_lnN_pgM

//Its just a book...
export class Book{
    constructor(file, string, tools){
		this.indx;
		this.pgs;
		this.pg_cnt;
		if(!string){
			this.indx=tools['index'];
			this.pgs=tools['pages'];
			this.pg_cnt=this.updt_pg_cnt()
		}

    }
	gt_mty_ln(){
        return new Line();
    }
    gt_mty_pg(){
		return new Page();
	}

    //PUBLIC GETTERS
    gt_pg_cnt(){
		return this.pg_cnt;
	}
	gt_ln_cnt(pageN){
        return this.pages[pageN].gt_ln_cnt();
    }
	updt_pg_cnt(){

	}

    //PUBLIC UTILS
    bukify(string, tools){
		if(!(string&&tools)){
			tools = this.tools;
		}
		if(!this.book){
			this.book=this.gt_mty_buk();
		}
		var page=this.gt_mty_pg();

        if(('lineCount' in tools)&&('anchor' in tools)){
            var line="";
            for(var i=0; i<string.length; i++){
				if(string[i]==tools['anchor'] && this.gt_ln_cnt(page)==tools['lineCount']-1){
					line+=string[i];
					this.wrt_ln2Pg(line, page);
					this.psh_pg(page);
					page=this.gt_mty_pg();
					line="";

				}else if(string[i]==tools['anchor'] && this.gt_ln_cnt(page)<tools['lineCount']-1){
					line+=string[i];
                    this.wrt_ln2Pg(line, page);
					line="";
				}else{
					line+=string[i];
					if(i==string.length-1){
						//THIS IS ALWAYS HIDDEN BECAUSE END OF STRING DOESNT GET CAUGHT BY LOGIC
						this.wrt_ln2Pg(line, page);
						this.psh_pg(page);
					}
				}
        	}
		}
	}

    mport(file){
        this.book = JSON.parse(fs.readFileSync(file))
    }
    xport(fileName){
        fs.writeFileSync(fileName+'.book', JSON.stringify(this.book))
    }
    
    vrtlz(string){
        
    }
	crss_rf(_Book){

	}

    wrt2buk(string, tools){
        if(!string){
            throw Error("you need to provide a string");
        }
        if(!tools){
            tools=this.tools;
        }
		this.bukify(string, tools);
	}

    prnt_buk(){
		console.log(util.inspect(this.book, {showHidden: true, depth: null, colors: true}));
	}

    //PRIVATE GETTERS
    gt_lnN_pgM(pgM, lnN){
        return this.getPageN(pgM, this)['lines'][lnN.toString];
    }

    gt_pgN(pgN){
        return this.book['pages'][pgN.toString()];
    }

	gt_ln_cnt(pg){

	}
    
    rmv_pg_n2m(pageN, pageM){
		assert.equal(pageM>=pageN, true);
		for (var i=pageN; i<=pageM; i++){
			this._rmvPgN(i);
		}
	}

	rmv_pg_n(n){
		delete this.book['pages'][n.toString()];
		var tmp = this.book['pages'][(n+1).toString()];
		delete this.book['pages'][(n+1).toString()];
		this.book['pages'][n.toString()]=tmp;
		this.book['pageCount']=(parseInt(this.book['pageCount'])-1).toString();
	}

    //this should be tested when its actually used, leave it here for now.
    pop_n_pgs(n_pgs){
		for(var i = 0; i<n_pgs; i++){
			this.pop_pg();
		}
	}
	
    pop_pg(){
        
    }

    psh_pg(page){

    }

    wrt_ln2Pg(line, page){

    }
}