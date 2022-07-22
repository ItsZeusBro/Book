import {THE_ILIAD} from "../../Cases/Books/IndividualBooks/TheIliad.js"
import {Strowfer} from "./Strowfer.js"
import * as assert from "node:assert"

class StrowferTest{
	constructor(){
		// assert.doesNotThrow(
		// 	()=>{

		// 	}
		// )
		// assert.throws(
		// 	()=>{

		// 	}
		// )
		this._StrowferErrors()
	}

	_StrowferErrors(){
		//THINGS THAT SHOULD BE AN ERROR
		assert.throws(
			()=>{
				new Strowfer()
			}
		)
		assert.throws(
			()=>{
				new Strowfer(123)
			}
		)
		assert.throws(
			()=>{
				new Strowfer(0.04)
			}
		)
		assert.throws(
			()=>{
				new Strowfer(true, true)
			}
		)
		assert.throws(
			()=>{
				new Strowfer([], [])
			}
		)
		assert.throws(
			()=>{
				new Strowfer(true, [])
			}
		)
		assert.throws(
			()=>{
				new Strowfer([], true)
			}
		)
		assert.doesNotThrow(
			()=>{
				new Strowfer(['1'], false)
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strowfer(['1'], false), 'STRING ARRAY, NO ENCODING, SHARED ENCODING BY INFERENCE')
			}
		)
	}
}

new StrowferTest()