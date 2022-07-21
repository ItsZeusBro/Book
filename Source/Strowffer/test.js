import {THE_ILIAD} from "../../Cases/Books/IndividualBooks/TheIliad.js"
import {Strowffer} from "./Strowffer.js"
import * as assert from "node:assert"

class StrowfferTest{
	constructor(){
		this.rowInterface()
		this.stringInterface()
		this.bufferInterface()

		this.rowData()
		this.stringData()
		this.bufferData()

	}

	rowInterface(){
		
		console.log('rowInterface() with full array, full type array, full index string, SHOULD PASS')
		assert.doesNotThrow(
			()=>{
				new Strowffer(
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 
					['int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int'], 
					'arbitrary row data'
					)
			}

		)

		console.log('rowInterface() with full array, null type, null index, SHOULD PASS')
		assert.doesNotThrow(
			()=>{
				new Strowffer(
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
					)
			}

		)

		console.log('rowInterface() with empty array, empty type array, empty index string, SHOULD FAIL')
		assert.throws(
			()=>{
				new Strowffer(
					[],
					[],
					''
				)
			}

		)
		
		console.log('rowInterface() with full array, index replaces type, SHOULD FAIL')
		assert.throws(
			()=>{
				new Strowffer(
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],  
					'arbitrary row data'
					)
			}

		)


		console.log('rowInterface() with full array, empty type array, empty index string, SHOULD FAIL')
		assert.throws(
			()=>{
				new Strowffer(
					[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
					[],
					''
				)
			}

		)

		console.log('rowInterface() with empty array, full type array, empty index string, SHOULD FAIL')
		assert.throws(
			()=>{
				new Strowffer(
					[],
					['int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int', 'str', 'utf-8', 'int'], 
					''
				)
			}

		)

	}

	stringInterface(){
		console.log('stringInterface() with full string, full type, full index, SHOULD PASS')
		assert.doesNotThrow(
			()=>{
				new Strowffer("hello world!", 'utf-8', 'greeting')
			}
		)

		console.log('stringInterface() with full string, full type, null index, SHOULD PASS')
		assert.doesNotThrow(
			()=>{
				new Strowffer("hello world!", 'utf-8')
			}
		)

		console.log('stringInterface() with full string, full type, null index, SHOULD PASS')
		assert.doesNotThrow(
			()=>{
				new Strowffer("hello world!")
			}
		)

		console.log('stringInterface() with empty string, empty type, empty index, SHOULD FAIL')
		assert.throws(
			()=>{
				new Strowffer("", '', '')
			}
		)

		console.log('stringInterface() with empty string, full type, full index, SHOULD FAIL')
		assert.throws(
			()=>{
				new Strowffer("", "utf-8", "full index")
			}
		)

	}

	bufferInterface(){
		console.log('bufferInterface() with full string, full type, full index, SHOULD PASS')
		assert.doesNotThrow(
			()=>{
				new Strowffer(Buffer.from("hello world!"), 'utf-8', 'greeting')
			}
		)

		console.log('bufferInterface() with full string, full type, no index, SHOULD PASS')
		assert.doesNotThrow(
			()=>{
				new Strowffer(Buffer.from("hello world!"), 'utf-8')
			}
		)

		console.log('bufferInterface() with full string, no type, no index, SHOULD PASS')
		assert.doesNotThrow(
			()=>{
				new Strowffer(Buffer.from("hello world!"))
			}
		)



		console.log('bufferInterface() with full string, empty type, full index, SHOULD FAIL')
		assert.throws(
			()=>{
				new Strowffer(Buffer.from("hello world!"), '', 'greeting')
			}
		)

		console.log('bufferInterface() with full string, empty type, empty index, SHOULD FAIL')
		assert.throws(
			()=>{
				new Strowffer(Buffer.from("hello world!"), '', '')
			}
		)

		console.log('bufferInterface() with empty buffer, full type, full index, SHOULD FAIL')
		assert.throws(
			()=>{
				new Strowffer(Buffer.from(""), 'utf-8', 'greeting')
			}
		)

		console.log('bufferInterface() with nothing, SHOULD FAIL')
		assert.throws(
			()=>{
				new Strowffer()
			}
		)

	}


	rowData(){
		var arr=[]
		for(var i=0; i<100000; i++){
			arr.push(i)
		}
		console.log('rowInterface() with large array, SHOULD PASS')
		assert.doesNotThrow(
			()=>{
				var strwfr = new Strowffer(
					arr
					)

				assert.deepEqual(strwfr.raw()[0], arr)
			}
		)


	}

	stringData(){
		var str=""
		for(var i=0; i<100000; i++){
			str+=i.toString()
		}
		console.log('rowInterface() with large str, SHOULD PASS')
		assert.doesNotThrow(
			()=>{
				var strwfr = new Strowffer(
					str
					)
				assert.deepEqual(strwfr.raw()[0], str)
			}
		)
	}

	bufferData(){
		var str=""
		for(var i=0; i<100000; i++){
			str+=i.toString()
		}
		console.log('rowInterface() with large buffer, SHOULD PASS')
		assert.doesNotThrow(
			()=>{
				var strwfr = new Strowffer(
					Buffer.from(str, 'utf-8'),
					'utf-8'
					)
				assert.deepEqual(strwfr.raw()[0], Buffer.from(str, 'utf-8'))
			}
		)
	}
}


new StrowfferTest()