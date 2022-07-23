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
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	cellSingleModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	rowNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	rowSingleModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	rowEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	objectEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
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
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	objectArrayEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	objectArraySingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}

	objectArrayNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	stringArrayEncodingArrayPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	stringArrayNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	stringArraySingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	stringSeparatorModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	stringEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	stringSingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	stringNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	bufferArrayEncodingArrayPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	bufferArraySingleEncodingPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	bufferArrayNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	bufferSeparatorModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	bufferEncodingArrayModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	bufferSingleEncodingModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
	}
	bufferNoModPath(){
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
			}
		)
		assert.doesNotThrow(
			()=>{
				assert.ok()
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