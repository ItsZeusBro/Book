import * as assert from "node:assert"
import * as util from "node:util"
import * as fs from "node:fs"
import {Scroll} from "./Scroll.js"
//gt_ = getters
//st_ = setters
//2 serves as an underscore that means "to"
//updt_ = updaters
//page = page
//lyn = line
//fs = file or strng
//cnt = Cnt
//bukify = bookify
//mport = import
//xport = export
//crss_ref = cross reference
//wrt2buk = write to buk
//prnt_buk = print buk
//psh_page = push page
//vrtlz = virtualize
//gt_mpty_lyn = get empty line
//If you have a variable that refers to the number of the 
//preceding object just append the variable in camelCase
//For example:
//gt_lynN_pageM

//Its just a buk...
export class Buk{
    constructor(tuls){
		this.fyl=tuls['fyl']
		this.indx=tuls['indx'];
		this.pages=tuls['pages'];
		this.page_cnt=this.updt_page_cnt()
    }
	gt_mpty_lyn(){
        return new Line();
    }
    gt_mpty_page(){
		return new Page();
	}

    //PUBLIC GETTERS
    gt_page_cnt(){
		return this.page_cnt;
	}
	gt_lyn_cnt(pageN){
        return this.pages[pageN].gt_lyn_cnt();
    }
	updt_page_cnt(){

	}

    //PUBLIC UTILS
    bukify(strng, tuls){
		if(!(strng&&tuls)){
			tuls = this.tuls;
		}
		if(!this.buk){
			this.buk=this.gt_mpty_buk();
		}
		var page=this.gt_mpty_page();

        if(('lynCnt' in tuls)&&('delim' in tuls)){
            var lyn="";
            for(var i=0; i<strng.length; i++){
				if(strng[i]==tuls['delim'] && this.gt_lyn_cnt(page)==tuls['lynCnt']-1){
					lyn+=strng[i];
					this.wrt_lyn2page(lyn, page);
					this.psh_page(page);
					page=this.gt_mpty_page();
					lyn="";

				}else if(strng[i]==tuls['delim'] && this.gt_lyn_cnt(page)<tuls['lynCnt']-1){
					lyn+=strng[i];
                    this.wrt_lyn2page(lyn, page);
					lyn="";
				}else{
					lyn+=strng[i];
					if(i==strng.length-1){
						//THIS IS ALWAYS HIDDEN BECAUSE END OF strng DOESNT GET CAUGHT BY LOGIC
						this.wrt_lyn2page(lyn, page);
						this.psh_page(page);
					}
				}
        	}
		}
	}

    mport(fyl){
        this.buk = JSON.parse(fs.readFileSync(fyl))
    }
    xport(fyl_name){
        fs.writeFileSync(fyl_name+'.buk', JSON.strngify(this.buk))
    }
    
    vrtlz(strng){
        
    }
	crss_ref(_Book){

	}

    wrt2buk(strng, tuls){
        if(!strng){
            throw Error("you need to provide a strng");
        }
        if(!tuls){
            tuls=this.tuls;
        }
		this.bukify(strng, tuls);
	}

    prnt_buk(){
		console.log(util.inspect(this.buk, {showHidden: true, depth: null, colors: true}));
	}

    //PRIVATE GETTERS
    gt_lynN_pageM(pageM, lynN){
        return this.getPageN(pageM, this)['lyns'][lynN.tostrng];
    }

    gt_pageN(pageN){
        return this.buk['pages'][pageN.tostrng()];
    }

	gt_lyn_cnt(page){

	}
    
    rmv_page_n2m(pageN, pageM){
		assert.equal(pageM>=pageN, true);
		for (var i=pageN; i<=pageM; i++){
			this._rmvpageN(i);
		}
	}

	rmv_page_n(n){
		delete this.buk['pages'][n.tostrng()];
		var tmp = this.buk['pages'][(n+1).tostrng()];
		delete this.buk['pages'][(n+1).tostrng()];
		this.buk['pages'][n.tostrng()]=tmp;
		this.buk['pageCnt']=(parseInt(this.buk['pageCnt'])-1).tostrng();
	}

    //this should be tested when its actually used, leave it here for now.
    pop_n_pages(n_pages){
		for(var i = 0; i<n_pages; i++){
			this.pop_page();
		}
	}
	
    pop_page(){
        
    }

    psh_page(page){

    }

    wrt_lyn2page(lyn, page){

    }
}