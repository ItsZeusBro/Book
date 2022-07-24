import {Cell} from "./Cell.js"
//you cant have two optional variables with default behavior
//at the same level in a subschema
export const GUARD_MAP=[
                    {
                            'isStringArray':[
                                    {
                                        'isEncodingArray':'_stringEncodedArrayOrStringArrayEncodedArray'
                                    },
                                    {
                                        'isEncoding':{
                                            'DEFAULT':'utf-32',
                                            'FUNCTION':'_stringArrayEncodedOrStringEncoded'
                                        }
                                    }
                            ]
                    },
                    {
                            'isString':[
                                    {
                                            'isSeparator':[
                                                {
                                                    'isEncoding': {
                                                        'DEFAULT':'utf-32',
                                                        'FUNCTION': '_stringSeparated'
                                                    }    
                                                }
                                            ]
                                    }, 
                                    {
                                            'isEncoding':{
                                                'DEFAULT':'utf-32',
                                                'FUNCTION': '_stringSeparated'
                                            }
                                    },
                                    {
                                            'isEncodingArray':'_stringEncodedArrayOrStringArrayEncodedArray'

                                    }   
                            ]
                    },
                    {
                            "isBufferArray":[
                                    {
                                            'isEncodingArray':'_bufferArrayEncodedArray'
                                    },
                                    {
                                            'isEncoding':{
                                                'DEFAULT':'utf-32',
                                                'FUNCTION': '_bufferArrayEncoded'
                                            }
                                    }
                            ]
                    },
                    {
                            "isBuffer":[
                                    {
                                        'isSeparator':'_bufferSeparated'
                                    },
                                    {
                                        'isEncodingArray':'_bufferEncodedArray'
                                    },
                                    {
                                        'isEncoding':{
                                            'DEFAULT':'utf-32',
                                            'FUNCTION': '_bufferEncoded'
                                        }
                                    }
                            ]
                    },
                    {
                            "isCell":[
                                {
                                        'isEncoding':{
                                            'DEFAULT':'utf-32',
                                            'FUNCTION': '_cellEncoding'
                                        }
                                }

                            ]
                    },       
                    {
                        "isRow":[
                            {
                                'isEncoding':{
                                    'DEFAULT':'utf-32',
                                    'FUNCTION': '_rowEncoding'
                                }
                            },
                            {
                                'isEncodingArray':'_rowEncodedArray'
                            }
                        ]
                    }
    ]


export class Guard{
    //attributions
    //https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
    //https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
    //https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript
    //https://javascript.plainenglish.io/how-to-check-for-null-in-javascript-dffab64d8ed5
    //https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript
    //https://stackoverflow.com/questions/4339288/typeof-for-regexp
    //https://bobbyhadz.com/blog/javascript-check-if-object-is-empty
    //v is just a schema that get passed in
    constructor(v, schema, obj){
        this.guard(v, schema, obj)
    }
    guard(v, schema, obj){
        //we want to take in the schema to build a queue of typechecks leading to a helper function call
        var queue=[]
        //step 1:
        queue = this.guardMap(v, queue, schema)
        this.execute(v, queue)
    }
    execute(v, queue){
        //console.log(v)
        //console.log(queue)
        //v is an array
        //queue holds the operations
        //This is another complex algorithm 
    }
    //base case is when the key yields an object or a string 
    guardMap(v, queue, schema){
        //step1:
        //console.log(schema[0])
        var _v = v.shift()

        for(var i = 0; i<schema.length; i++){
            var guard=schema[i];
            console.log(guard)
            if(this.callOn(Object.keys(guard)[0], _v)){
                schema=schema[i][Object.keys(guard)[0]]
                //console.log(schema)

                i--;
            }
            //if the key of the object evaluates to true on _v
            //reset schema to next function
            //console.log(guard)
            
            _v = v.shift()
        }
        return
    }

    callOn(func, _v){
        func+='('+'"' +_v + '"' + ')'
        func='this.'+func

        return eval(func)

    }
    




    isNKeys(obj, n){
        return (Object.keys(obj).length==n)
    }
    isArray(v){ return ((Array.isArray(v)) && v.length) }

	isString(v){ 
        return (typeof v === 'string' || v instanceof String) 
    }


    isStringArray(v){ 
		if(!this.isArray(v)){ return }
		v.forEach( (e) => { if( !this.isString(e) ) { return } } );
		return true
	}

    isEncoding(v){ 
        return Buffer.isEncoding(v); 
    }

	isEncodingArray(v){ 
        if(!this.isArray(v)) {return}
        v.forEach( (e) => { if( !Buffer.isEncoding(e) ) { return } } );
        return true
		
	}

    isObj(v){ return (typeof v === 'object' && !Array.isArray(v) && v !== null) }

    isObjArray(v){
        if(!this.isArray(v)) {return}
		v.forEach( (e) => { if( !this.isObj(e) ) { return } } );
		return true
    }
    isEmptyObject(obj){
        return Object.keys(obj).length === 0;
    }

    isInt(v){
        var x;
        return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x); //
    }

    isIntArray(v){
        if(!this.isArray(v)) {return}
        v.forEach( (e) => { if( !this.isInt(e) ) { return } } );
        return true
    }

    isBuffer(v){ return Buffer.isBuffer(v); }
	
	isBufferArray(v){ 
        if(!this.isArray(v)) { return }
        v.forEach((e)=>{ if(!Buffer.isBuffer(e)){ return } })
        return true
	}

    isNull(v){ return (v==null || v===null) }

    isUndefined(v){ return (typeof v === "undefined" || v===undefined) }

    isRegX(v){ return (v instanceof RegExp && v.constructor == RegExp) }

    isArrayOfRegX(v){
        if(!this.isArray(v)) { return }
        v.forEach((e)=>{ if(!Buffer.isRegX(e)){ return } })
        return true
    }

    isSeparator(v){ 

        if(v.includes('s:')){ 
            return true 
        } 
    }

	sameLength(arr1, arr2){
		if( this.isArray(arr1) && this.isArray(arr2) ){ return ( arr1.length == arr2.length ) }	
	}

	
	isRow(strofr){
		if(this.isArray(strofr)){
			strofr.forEach((cell)=>{
				if(!this.isCell(cell)){return false}
			})
			return true
		}
	}
	
	isCell(cell){
		if(cell instanceof Cell && cell.v && cell.e && cell.i){
			return true
		}
	}

	

	sameLength(...v){
		if( this.isArray(arr1) && this.isArray(arr2) ){ return ( arr1.length == arr2.length ) }	
	}

    // isGuarded(v){

    // }

    // isArrayOfGuarded(v){

    // }
}

new Guard(["strng", "s:separator", "utf-32"], GUARD_MAP, undefined)