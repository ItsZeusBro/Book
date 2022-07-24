import {Cell} from "./Cell.js"
//you cant have two optional variables with default behavior
//at the same level in a subschema


export const GUARDS=[
        {
                'isString':[
                        {
                                'isEncodingArray':'isStringIsEncodingArray'
                        },
                        {
                                'isEncoding':{
                                        'DEFAULT':'utf-32',
                                        'FUNCTION':'isStringIsEncoding'
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
                                                    'FUNCTION': 'isStringIsSeparatorIsEncoding'
                                                }    
                                        }
                                ]
                        }, 
                        {
                                'isEncoding':{
                                        'DEFAULT':'utf-32',
                                        'FUNCTION': 'isStringIsEncoding'
                                }
                        },
                        {
                                'isEncodingArray':'isStringIsEncodingArray'

                        }   
                ]
        },
        {
                "isCell":[
                        {
                                'isEncoding':{
                                        'DEFAULT':'utf-32',
                                        'FUNCTION': 'isCellIsEncoding'
                                }
                        }

                ]
        },       
        {
                "isCell":[
                        {
                                'isString':[

                                        {
                                            'DEFAULT':'utf-32',
                                            'FUNCTION': 'isRowIsEncoding'
                                        }
                                ]
                        },
                        {
                                'isString':'isRowIsEncodingArray'
                        }
                ]
        }
]

export class Guard{
    constructor(v, schema, obj){
        this.guard(v, schema, obj)
    }
    guard(v, schema, obj){
        var _nG;
        //recursive function nextGuard() returns nothing. It succeeds at each level or throws an error
       
        try{
            for(var i = 0; i<schema.length; i++){
                try {
                    this.nextGuard(v, 0,  schema[i])
                }catch{
                    //do nothing
                }
            }
        }catch{

        }
        

    }
    nextGuard(v, v_indx, schema){
        if(this.isObjArray(schema)){
            console.log("SCHEMA IS OBJECT ARRAY")
            console.log(v[v_indx], schema, '\n\n\n\n')

        //     for (var i = 0; i<schema.length; i++){
        //         //if we pass the guard, recurse, else throw error
        //         if(this.passGuard(schema)){
        //             //shrink obj
        //             this.nextGuard(v, v_indx+=1, this.passGuard(schema))
        //         }
        //     }
        }else if(this.isObj(schema)){
            if(this.isNKeys(schema, 1)){
                console.log("SCHEMA IS GUARD OBJECT")
                console.log(v[v_indx], schema, '\n\n\n\n')
                if(this.passGuard(v, v_indx, schema)){
                    //shrink obj
                    this.nextGuard(v, v_indx+1, this.passGuard(v, v_indx, schema))
                }
            }else if(this.isNKeys(schema, 2)){
                console.log("SCHEMA IS TERMINAL OBJECT")
                console.log(v[v_indx], schema, '\n\n\n\n')
        //         //if there is two keys, call terminate()
        //         this.terminate(schema)
            }else{
                throw Error("Schema error, should never have more than 1 key to a non terminating level and should never have more than 2 keys to a terminating level")
            }

        //     //if there are three or more, throw schema error
        //     console.log("OBJ", schema)
        }else{
            throw Error('schema must be of type object or of type array')
        }

    }
    terminate(v, strngOrObj){

    }  

    passGuard(obj){
        //if it doesn't pass guard return nothing,
        //if it does return the next layer of schema
        console.log(obj)
    }
    callOn(func, _v){
        func+='('+'"' +_v + '"' + ')'
        func='this.'+func

        return eval(func)

    }
    






    isNKeys(obj, n){
        return (Object.keys(obj).length==n)
    }
    greaterThanNKeys(obj, n){
        return (Object.keys(obj).length>n)
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

    isRegX(v){ return (v instanceof RegExp || v.constructor == RegExp) }

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


class someObj{
    constructor(){

    }

    isStringIsEncodingArray(v){
        console.log("isStringIsEncodingArray(", v, ")")
    }
    isStringIsEncoding(v){
        console.log("isStringIsEncoding(", v, ")")

    }
    isStringIsSeparatorIsEncoding(v){
        console.log("isStringIsSeparatorIsEncoding(", v, ")")

    }
    isStringIsEncoding(v){
        console.log("isStringIsEncoding(", v, ")")

    }
    isStringIsEncodingArray(v){
        console.log("isStringIsEncodingArray(", v, ")")

    }
    isBufferArrayIsEncodingArray(v){
        console.log("isBufferArrayIsEncodingArray(", v, ")")

    }
    isBufferArrayIsEncoding(v){
        console.log("isBufferArrayIsEncoding(", v, ")")

    }
    isBufferIsSeparator(v){
        console.log("isBufferIsSeparator(", v, ")")

    }
    isBufferIsEncodingArray(v){
        console.log("isBufferIsEncodingArray(", v, ")")

    }
    isBufferIsEncoding(v){
        console.log("isBufferIsEncoding(", v, ")")

    }
    isBufferIsSeparator(v){
        console.log("isBufferIsSeparator(", v, ")")

    }
    isBufferIsEncodingArray(v){
        console.log("isBufferIsEncodingArray(", v, ")")

    }
    isBufferIsEncoding(v){
        console.log("isBufferIsEncoding(", v, ")")

    }
    isCellIsEncoding(v){
        console.log("isCellIsEncodings(", v, ")")

    }
    isRowIsEncoding(v){
        console.log("isRowIsEncoding(", v, ")")

    }
    isRowIsEncodingArray(v){
        console.log("isRowIsEncodingArray(", v, ")")

    }
}


new Guard(["strng", "s:separator", "utf-32"], GUARDS,  new someObj())

    //attributions
    //https://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
    //https://stackoverflow.com/questions/8511281/check-if-a-value-is-an-object-in-javascript
    //https://stackoverflow.com/questions/4059147/check-if-a-variable-is-a-string-in-javascript
    //https://javascript.plainenglish.io/how-to-check-for-null-in-javascript-dffab64d8ed5
    //https://stackoverflow.com/questions/3390396/how-can-i-check-for-undefined-in-javascript
    //https://stackoverflow.com/questions/4339288/typeof-for-regexp
    //https://bobbyhadz.com/blog/javascript-check-if-object-is-empty

    