import { Cell } from "./WordCell.js"
//input
//if we iterate and fill inside the class from a constructor string, it requires a single encoding
//if we are iterating and filling from the outside of the class, we have options for encoding for dataframes
//output
//there are different usecases
export class Strow{
    constructor(strow, indx={}, cntxt, encdng="utf-8"){
		if(cntxt=='str' && strow){
			//if cntxt is a str its just a string in the strow variable
		}else if(cntxt=='row' && this.isString(strow)){
			//if cntxt is 'row', with strow as a string, we cellify the string with the same encoding
		}else if (cntxt=='row' && this.isWordCell()){
			//if cntxt is 'row' with a strow as cell schema, we cellify the strow schema

		}
    }



}