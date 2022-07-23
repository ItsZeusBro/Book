import {THE_ILIAD} from "../../Cases/Books/IndividualBooks/TheIliad.js"
import {Strofr} from "./Strofr.js"
import * as assert from "node:assert"
import {Cell} from "./Cell.js"
class StrofrTest{
	constructor(){

		this._StrofrErrors()
		this._StrofrPathTests()
	}

	
	_StrofrPathTests(){
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

	_StrofrTests(){
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


	_StrofrErrors(){
		//THINGS THAT SHOULD BE AN ERROR
		assert.throws(
			()=>{
				new Strofr()
			},
			{
				name: 'Error',
				message:"LEAVE THIS TOMB FOR YOUR OWN GOOD"
			}

		)
		assert.throws(
			()=>{
				new Strofr([])
			},
			{
				name: 'Error',
				message:"LEAVE THIS TOMB FOR YOUR OWN GOOD"
			}
		)
		console.log("this")
		assert.throws(
			()=>{
				new Strofr(false)
			},
			{
				name: 'Error',
				message:"LEAVE THIS TOMB FOR YOUR OWN GOOD"
			}
		)
		assert.throws(
			()=>{
				new Strofr(true, [])
			},
			{
				name: 'Error',
				message:"LEAVE THIS TOMB FOR YOUR OWN GOOD"
			}
		)

		assert.throws(
			()=>{
				new Strofr(true, true)
			},
			{
				name: 'Error',
				message:"LEAVE THIS TOMB FOR YOUR OWN GOOD"
			}
		)

		assert.throws(
			()=>{
				new Strofr([], 'utf-8')
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
				assert.ok(new Strofr(new Cell(1, 'int')), "CELL, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "CELL, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "CELL, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	cellSingleModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "CELL, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "CELL, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "CELL, SINGLE ENCODING MOD")
			}
		)
	}
	rowNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(),"ROW, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(),"ROW, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(),"ROW, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	rowSingleModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "ROW, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "ROW, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "ROW, SINGLE ENCODING MOD")
			}
		)
	}
	rowEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(Strofr(), "ROW, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(Strofr(), "ROW, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(Strofr(), "ROW, ENCODING ARRAY MOD")
			}
		)
	}
	objectEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT, ENCODING ARRAY MOD")
			}
		)
	}
	objectNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(123), "OBJECT, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(0.04), "OBJECT, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(/somePattern/), "OBJECT, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		
	}
	objectArrayEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT ARRAY, ENCODING ARRAY MOD")
			}
		)
	}
	objectArraySingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT ARRAY, SINGLE ENCODING MOD")
			}
		)
	}

	objectArrayNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "OBJECT ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	stringArrayEncodingArrayPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING ARRAY, ENCODING ARRAY MOD")
			}
		)
	}
	stringArrayNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	stringArraySingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING ARRAY, SINGLE ENCODING MOD")
			}
		)
	}

	stringSeparatorModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
	}

	stringEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, ENCODING ARRAY MOD")
			}
		)
	}
	stringSingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, SINGLE ENCODING MOD")
			}
		)
	}
	stringNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "STRING, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	bufferArrayEncodingArrayPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER ARRAY, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER ARRAY, ENCODING ARRAY MOD")
			}
		)
	}
	bufferArraySingleEncodingPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER ARRAY, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER ARRAY, SINGLE ENCODING MOD")
			}
		)
	}
	bufferArrayNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER ARRAY, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	bufferSeparatorModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, SEPARATOR MOD, ENCODING INFERRED AS DEF")
			}
		)
	}
	bufferEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, ENCODING ARRAY MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, ENCODING ARRAY MOD")
			}
		)
	}
	bufferSingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, SINGLE ENCODING MOD")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, SINGLE ENCODING MOD")
			}
		)
	}
	bufferNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, NO MOD, ENCODING INFERRED AS DEF")
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok(new Strofr(), "BUFFER, NO MOD, ENCODING INFERRED AS DEF")
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



new StrofrTest()