import {Guard} from './Guard.js'

export const GUARD=[
    {
            'isStr':"isString"

    },
    {
            
            'isStr':[
                    {
                            'isStr':"isStringIsString"
                    },
                    {
                            'isStr':[
                                    {
                                        'isInt':'isStringIsStringIsInt'
                                    }
                            ]
                    },

                    {
                            'isSep':[
                                    {
                                            'isEncoding': {
                                                'DEFAULT':'utf8',
                                                'FUNCTION': 'isStringIsSeparatorIsEncoding'
                                            }    
                                    }
                            ]
                    }, 
                    {
                            'isEnc':{
                                    'DEFAULT':'utf8',
                                    'FUNCTION': 'isStringIsEncoding'
                            }
                    },
                    {
                            'isEncArr':'isStringIsEncodingArray'
                    }   
            ]
    },
    {
            'isInt':[
                    {
                            'isInt': {
                                'DEFAULT':10,
                                'FUNCTION': 'isIntegerIsInteger'
                            }    
                    },

                    {
                            'isStr':{
                                "DEFAULT":"",
                                "FUNCTION": 'isIntegerIsString'
                            }
                    },
                    {
                            'isIntArr':{
                                "DEFAULT":[],
                                "FUNCTION": 'isIntegerIsIntegerArray'
                            }
                    },
                    {
                            'isArr':[
                                    {
                                        'isArray':"isIntegerIsArrayIsArray"
                                    },
                                    {
                                        'isString':"isIntegerIsArrayIsString"
                                    }
                            ]
                    },
        ]
            
    },
    {
            'isArr':'isStringIsSeparatorIsEncoding' 
    }
]

class TestObj{
    constructor(...v){
        new Guard(v, GUARDS,  this)
    }

    isString(...v){

        console.log("isString(", v, ")")

    }
    isStringIsString(...v){
        console.log("isStringIsString(", v, ")")

    }
    isStringIsStringIsInt(...v){
        console.log("isStringIsStringIsInt(", v, ")")

    }
    isStringIsIntIsString(...v){
        console.log("isStringIsIntIsString(", v, ")")

    }

    isStringIsIntIsInt(...v){
        console.log("isStringIsIntIsInt(", v, ")")

    }
    isStringIsEncoding(...v){
        console.log("isStringIsEncoding(", v, ")")

    }
    isStringIsSeparatorIsEncoding(...v){
        console.log("isStringIsSeparatorIsEncoding(", v, ")")
    }
    

    isStringIsSeparatorIsEncoding(...v){
        console.log("isStringIsEncodingIsInt(", v, ")")
    }
    
}

class Test{
    constructor(){
        this.constructorTests()
    }

    constructorTests(){
        new TestObj('someString')
        new TestObj('string1', 'string2')
        new TestObj('string1', 'string2', 4)
        new TestObj('string1', 5, 'string2')
        new TestObj('string1', 4, 5)
        new TestObj('string1', 'utf8')
        new TestObj('string1', 'sep:,', 'utf8')
        new TestObj('string1', 'utf8', 3)


    }
}


new Test()

    // isArray(v){ return ((Array.isArray(v)) && v.length) }

	// isString(v){ 
    //     return (typeof v === 'string' || v instanceof String) 
    // }
    // isStringArray(v){ 
	// 	if(!this.isArray(v)){ return }
	// 	v.forEach( (e) => { if( !this.isString(e) ) { return } } );
	// 	return true
	// }

    // isEncoding(v){ 
    //     return Buffer.isEncoding(v); 
    // }

	// isEncodingArray(v){ 
    //     if(!this.isArray(v)) {return}
    //     v.forEach( (e) => { if( !Buffer.isEncoding(e) ) { return } } );
    //     return true
		
	// }

    // isObj(v){ return (typeof v === 'object' && !Array.isArray(v) && v !== null) }

    // isObjArray(v){
    //     if(!this.isArray(v)) {return}
	// 	v.forEach( (e) => { if( !this.isObj(e) ) { return } } );
	// 	return true
    // }
    // isEmptyObject(obj){
    //     return Object.keys(obj).length === 0;
    // }

    // isInt(v){
    //     var x;
    //     return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x); //
    // }

    // isIntArray(v){
    //     if(!this.isArray(v)) {return}
    //     v.forEach( (e) => { if( !this.isInt(e) ) { return } } );
    //     return true
    // }

    // isBuffer(v){ return Buffer.isBuffer(v); }
	
	// isBufferArray(v){ 
    //     if(!this.isArray(v)) { return }
    //     v.forEach((e)=>{ if(!Buffer.isBuffer(e)){ return } })
    //     return true
	// }

    // isNull(v){ return (v==null || v===null) }

    // isUndefined(v){ return (typeof v === "undefined" || v===undefined) }

    // isRegX(v){ return (v instanceof RegExp || v.constructor == RegExp) }

    // isArrayOfRegX(v){
    //     if(!this.isArray(v)) { return }
    //     v.forEach((e)=>{ if(!Buffer.isRegX(e)){ return } })
    //     return true
    // }

    // isSeparator(v){ 

    //     if(v.includes('s:')){ 
    //         return true 
    //     } 
    // }

	// sameLength(arr1, arr2){
	// 	if( this.isArray(arr1) && this.isArray(arr2) ){ return ( arr1.length == arr2.length ) }	
	// }

	
	// isRow(strofr){
	// 	if(this.isArray(strofr)){
	// 		strofr.forEach((cell)=>{
	// 			if(!this.isCell(cell)){return false}
	// 		})
	// 		return true
	// 	}
	// }
	
	// isCell(cell){
	// 	if(cell instanceof Cell && cell.v && cell.e && cell.i){
	// 		return true
	// 	}
	// }

	// sameLength(...v){
	// 	if( this.isArray(arr1) && this.isArray(arr2) ){ return ( arr1.length == arr2.length ) }	
	// }