import {THE_ILIAD} from "../../Cases/Books/IndividualBooks/TheIliad.js"
import {Strowfer} from "./Strofer.js"
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
		this._StrowferTypeChecks()
	}

	_StrowferErrors(){
		//THINGS THAT SHOULD BE AN ERROR
		assert.throws(
			()=>{
				new Strowfer()
			},
			"LEAVE THIS TOMB FOR YOUR OWN GOOD"
		)
		assert.throws(
			()=>{
				new Strowfer([])
			},
			"LEAVE THIS TOMB FOR YOUR OWN GOOD"
		)
		assert.throws(
			()=>{
				new Strowfer(false)
			},
			"LEAVE THIS TOMB FOR YOUR OWN GOOD"
		)
		assert.throws(
			()=>{
				new Strowfer(true, [])
			},
			"LEAVE THIS TOMB FOR YOUR OWN GOOD"
		)

		assert.throws(
			()=>{
				new Strowfer(true, true)
			},
			"LEAVE THIS TOMB FOR YOUR OWN GOOD"
		)

		assert.throws(
			()=>{
				new Strowfer([], 'utf-8')
			},
			"LEAVE THIS TOMB FOR YOUR OWN GOOD"
		)
	}

	_StrowferTypeChecks(){

		assert.doesNotThrow(
			()=>{
				assert.ok(new Strowfer(123))
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strowfer(0.04))
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strowfer(/somePattern/))
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strowfer([1], ['utf-8']), "OBJECT ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strowfer([1], 'utf-8'), "OBJECT ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strowfer([1]), "OBJECT ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strowfer(['1'], ['utf-8']), "STRING ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strowfer(['1']), "STRING ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strowfer(['1'], 'utf-8'), "STRING ARRAY, SINGLE ENCODING MOD")
			}
		)
	}
}

new StrowferTest()