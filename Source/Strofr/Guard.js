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
    constructor(v, obj){

    }
    guard(v, obj, schema){
        //we want to take in the schema to build a queue of typechecks leading to a helper function call
        var queue=[]
        //step 1:
        //guardMap(v, queue, schema)
            
    }
    //base case is when the key yields an object or a string 
    guardMap(v, queue, schema){
        //step1:
        schema.forEach((obj)=>{
            if(this.isGuardMapBase(obj)){
                queue.push(this.isGuardMapBase(obj))
            }else{

            }
        })
        //iterate through schema array
            //step1: check if at base case, if so call basecase(v, queue)

            //step2:
    }

    isGuardMapBase(obj, queue){
        if(this.isObj(obj) && !this.isEmptyObject(obj)){
            var key0 = Object.keys(obj)[0]
            //if object[key0] is empty object, throw Error()
            if(this.isObj(obj[key0]) && this.isEmptyObject(obj[key0])){
                throw Error("Schema contains empty object")
            }else{
                // if object[key0] is array, its not a base case, return false
                if(this.isArray(obj[key0])){
                    return false;
                }else{
                    // if object[key0] is string or object return trues
                    if (this.isString(obj[key0])){
                        queue.push(key0)
                        queue.push(obj[key0])
                        return queue
                    }else if(this.isObj(obj[key0])){
                        //check if both keys present, default and 
                        //make sure there are two keys
                        if(this.isNKeys(obj[key0], 2)){
                            if(Object.keys(obj[key0])[0]!='DEFAULT'||Object.keys(obj[key0])[0]!='FUNCTION'){
                                if(Object.keys(obj[key0][1])!='DEFAULT'||Object.keys(obj[key0][1]!='FUNCTION')){
                                    queue.push(obj[key0]['DEFAULT'])
                                    queue.push(obj[key0]['FUNCTION'])
                                    return queue
                                }
                            }else{
                                throw Error("Base case object lacks maximum of 2 keys (DEFAULT, FUNCTION)")
                            }
                        }else{
                            throw Error("Base case object lacks maximum of 2 keys (DEFAULT, FUNCTION)")
                        }

                    }else{
                        throw Error("obj[key0] is not an object or a string")
                    }
                }
            }
        }
       return false
    }

    isNKeys(obj, n){

    }
    isArray(v){ return ((Array.isArray(v)) && v.length) }

	isString(v){ return (typeof v === 'string' && v instanceof String) }


    isStringArray(v){ 
		if(!this.isArray(v)){ return }
		v.forEach( (e) => { if( !this.isString(e) ) { return } } );
		return true
	}

    isEncoding(v){ return Buffer.isEncoding(v); }

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
    isEmptyObject(obj)[
        return Object.keys(obj).length === 0;
    ]

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

    isNull(v){ return (v==null && v===null) }

    isUndefined(v){ return (typeof v === "undefined" && v===undefined) }

    isRegX(v){ return (v instanceof RegExp && v.constructor == RegExp) }

    isArrayOfRegX(v){
        if(!this.isArray(v)) { return }
        v.forEach((e)=>{ if(!Buffer.isRegX(e)){ return } })
        return true
    }

    // isGuarded(v){

    // }

    // isArrayOfGuarded(v){

    // }
}
