import {THE_ILIAD} from "../../Cases/Books/IndividualBooks/TheIliad.js"
import {Strofer} from "./Strofer.js"
import * as assert from "node:assert"

class StroferTest{
	constructor(){

		this._StroferErrors()
		this._StroferTypeChecks()
	}

	_StroferErrors(){
		//THINGS THAT SHOULD BE AN ERROR
		assert.throws(
			()=>{
				new Strofer()
			},
			{
				name: 'Error',
				message:"LEAVE THIS TOMB FOR YOUR OWN GOOD"
			}

		)
		assert.throws(
			()=>{
				new Strofer([])
			},
			{
				name: 'Error',
				message:"LEAVE THIS TOMB FOR YOUR OWN GOOD"
			}
		)
		console.log("this")
		assert.throws(
			()=>{
				new Strofer(false)
			},
			{
				name: 'Error',
				message:"LEAVE THIS TOMB FOR YOUR OWN GOOD"
			}
		)
		assert.throws(
			()=>{
				new Strofer(true, [])
			},
			{
				name: 'Error',
				message:"LEAVE THIS TOMB FOR YOUR OWN GOOD"
			}
		)

		assert.throws(
			()=>{
				new Strofer(true, true)
			},
			{
				name: 'Error',
				message:"LEAVE THIS TOMB FOR YOUR OWN GOOD"
			}
		)

		assert.throws(
			()=>{
				new Strofer([], 'utf-8')
			},
			{
				name: 'Error',
				message:"LEAVE THIS TOMB FOR YOUR OWN GOOD"
			}
		)
	}

	_StroferTypeChecks(){

		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(123))
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(0.04))
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(/somePattern/))
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer([1], ['utf-8']), "OBJECT ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer([1], 'utf-8'), "OBJECT ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer([1]), "OBJECT ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(['1'], ['utf-8']), "STRING ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(['1']), "STRING ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(['1'], 'utf-8'), "STRING ARRAY, SINGLE ENCODING MOD")
			}
		)
	}
}

new StroferTest()