import * as assert from "node:assert"
import * as util from "node:util"
import * as fs from "node:fs"
import {Lyn} from "./Line.js"

//Its just a buk...

//each buk has a char count per page
export class Buk{
    constructor(strng, tuls){
		
    }

	//PUBLIC UTILS
	bukify(strng, tuls){
		
		
	}

	import(fyl){
        this.buk = JSON.parse(fs.readFileSync(fyl))
    }
    xport(fyl_name){
        fs.writeFileSync(fyl_name+'.buk', JSON.strngify(this.buk))
    }

	get_mpty_lyn(){
        return new Line();
    }
    get_mpty_page(){
		return new Page();
	}

    //PUBLIC GETTERS
    get_page_cnt(){
		return this.page_cnt;
	}
	get_lyn_cnt(pageN){
        return this.pages[pageN].get_lyn_cnt();
    }
	updt_page_cnt(){

	}

    

    
    
    vrtlz(strng){
        
    }
	crss_ref(Buk){

	}

    wrt2buk(strng, tuls){

	}

    prnt_buk(){

	}

    //PRIVATE GETTERS
    get_lynN_pageM(pageM, lynN){
    }

    get_pageN(pageN){
    }

	get_lyn_cnt(page){

	}
    
    rmv_page_n2m(pageN, pageM){

	}

	rmv_page_n(n){

	}

    //this should be tested when its actually used, leave it here for now.
    pop_n_pages(n_pages){

	}
	
    pop_page(){
        
    }

    psh_page(page){

    }

    wrt_lyn2page(lyn, page){

    }
}