import {THE_ILIAD} from "../../Cases/Books/IndividualBooks/TheIliad.js"
import {Strofer} from "./Strofer.js"
import * as assert from "node:assert"

class StroferTest{
	constructor(){

		this._StroferErrors()
		this._StroferPathTests()
	}

	
	_StroferPathTests(){
		this.cellNoModPath()
		this.cellSingleModPath()
		this.rowNoModPath()
		this.rowSingleModPath()
		this.rowEncodingArrayModPath()
		this.objectEncodingArrayModPath()
		this.objectArraySingleEncodingModPath()
		this.objectArrayNoModPath()
		this.stringArrayEncodingArrayPath()
		this.stringArrayNoModPath()
		this.stringArraySingleEncodingModPath()
		this.stringSeparatorModPath()
		this.stringEncodingArrayModPath()
		this.stringSingleEncodingModPath()
		this.stringNoModPath()
		this.bufferArrayEncodingArrayPath()
		this.bufferArraySingleEncodingPath()
		this.bufferArrayNoModPath()
		this.bufferSeparatorModPath()
		this.bufferEncodingArrayModPath()
		this.bufferSingleEncodingModPath()
		this.bufferNoModPath()
	}

	_StroferTests(){
		this.cellNoMod()
		this.cellSingleMod()
		this.rowNoMod()
		this.rowSingleMod()
		this.rowEncodingArrayMod()
		this.objectEncodingArrayMod()
		this.objectArraySingleEncodingMod()
		this.objectArrayNoMod()
		this.stringArrayEncodingArray()
		this.stringArrayNoMod()
		this.stringArraySingleEncodingMod()
		this.stringSeparatorMod()
		this.stringEncodingArrayMod()
		this.stringSingleEncodingMod()
		this.stringNoMod()
		this.bufferArrayEncodingArray()
		this.bufferArraySingleEncoding()
		this.bufferArrayNoMod()
		this.bufferSeparatorMod()
		this.bufferEncodingArrayMod()
		this.bufferSingleEncodingMod()
		this.bufferNoMod()
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



	cellNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "CELL, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "CELL, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "CELL, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	cellSingleModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "CELL, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "CELL, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "CELL, SINGLE ENCODING MOD")
			}
		)
	}
	rowNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(),"ROW, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(),"ROW, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(),"ROW, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	rowSingleModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "ROW, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "ROW, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "ROW, SINGLE ENCODING MOD")
			}
		)
	}
	rowEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(Strofer(), "ROW, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(Strofer(), "ROW, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(Strofer(), "ROW, ENCODING ARRAY MOD")
			}
		)
	}
	objectEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT, ENCODING ARRAY MOD")
			}
		)
	}
	objectNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(123), "OBJECT, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(0.04), "OBJECT, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(/somePattern/), "OBJECT, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		
	}
	objectArrayEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT ARRAY, ENCODING ARRAY MOD")
			}
		)
	}
	objectArraySingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT ARRAY, SINGLE ENCODING MOD")
			}
		)
	}

	objectArrayNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "OBJECT ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	stringArrayEncodingArrayPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING ARRAY, ENCODING ARRAY MOD")
			}
		)
	}
	stringArrayNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	stringArraySingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING ARRAY, SINGLE ENCODING MOD")
			}
		)
	}

	stringSeparatorModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
	}

	stringEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, ENCODING ARRAY MOD")
			}
		)
	}
	stringSingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, SINGLE ENCODING MOD")
			}
		)
	}
	stringNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "STRING, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	bufferArrayEncodingArrayPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER ARRAY, ENCODING ARRAY MOD")
			}
		)
	}
	bufferArraySingleEncodingPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER ARRAY, SINGLE ENCODING MOD")
			}
		)
	}
	bufferArrayNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	bufferSeparatorModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	bufferEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, ENCODING ARRAY MOD")
			}
		)
	}
	bufferSingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, SINGLE ENCODING MOD")
			}
		)
	}
	bufferNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofer(), "BUFFER, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}







	objectNoMod(){
		
	}

	cellNoMod(){

	}
	cellSingleMod(){

	}
	rowNoMod(){

	}
	rowSingleMod(){

	}
	rowEncodingArrayMod(){

	}
	objectEncodingArrayMod(){

	}
	objectNoMod(){

	}
	objectArrayEncodingArrayMod(){

	}
	objectArraySingleEncodingMod(){

	}
	objectArrayNoMod(){

	}
	stringArrayEncodingArray(){

	}
	stringArrayNoMod(){

	}
	stringArraySingleEncodingMod(){

	}
	stringSeparatorMod(){

	}
	stringEncodingArrayMod(){

	}
	stringSingleEncodingMod(){

	}
	stringNoMod(){

	}
	bufferArrayEncodingArray(){

	}
	bufferArraySingleEncoding(){

	}
	bufferArrayNoMod(){

	}
	bufferSeparatorMod(){

	}
	bufferEncodingArrayMod(){

	}
	bufferSingleEncodingMod(){

	}
	bufferNoMod(){

	}
}



new StroferTest()