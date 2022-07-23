//you cant have two optional variables with default behavior
//at the same level in a subschema
export const GUARD_MAP={
    'Strofr':{
        'isStringArray':{
                'isEncodingArray':'_stringEncodedArrayOrStringArrayEncodedArray',
                //This subschema means accept an encoding
                //or use this default
                //ENCODING acts as a switch that calls the same
                //function using the variable passed as encoding
                //or default variable passed below
                'isEncoding':{
                    //class needs three constructor
                    //variables because we are three
                    //layers deep
                    'DEFAULT':'utf-32',
                    'FUNCTION':'_stringArrayEncodedOrStringEncoded'
                }
                //if there was no default behavior, guard implicitly calls else
                //with general error message, unless provided with an error message
        }, 

        'isString':{
                'isSeparator':{

                    'isEncoding': {

                        'DEFAULT':'utf-32',
                        'FUNCTION': '_stringSeparated'
                    }                    
                }, 
                'isEncoding':{
                    'DEFAULT':'utf-32',
                    'FUNCTION': '_stringSeparated'
                },

                'isEncodingArray':'_stringEncodedArrayOrStringArrayEncodedArray'

        }, 
        "isBufferArray":{
                'isEncodingArray':'_bufferArrayEncodedArray', 
                'isEncoding':{
                    'DEFAULT':'utf-32',
                    'FUNCTION': '_bufferArrayEncoded'
                }
        },
        "isBuffer":{
		        'isSeparator':'_bufferSeparated', 
                'isEncodingArray':'_bufferEncodedArray', 
                'isEncoding':{
                    'DEFAULT':'utf-32',
                    'FUNCTION': '_bufferEncoded'
                }
        }
        "isCell":{
            'isEncoding':{
                'DEFAULT':'utf-32',
                'FUNCTION': '_cellEncoding'
            }
        }
        "isRow":{
            'isEncoding':{
                'DEFAULT':'utf-32',
                'FUNCTION': '_rowEncoding'
            },

            'isEncodingArray':'_rowEncodedArray'

        }
    }
}


export class Guard{
    //v is just a schema that get passed in
    constructor(v, obj){

    }
    guard(){

    }

    isString(v){

    }
    isArrayOfString(v){

    }

    isObj(v){

    }
    isArrayOfObj(v){

    }
    isDictionary(v){

    }
    isArrayOfDictionary(v){

    }
    isInt(v){

    }
    isArrayOfInt(v){

    }
    isBuffer(v){

    }
    isArrayOfBuffer(v){

    }
    isNull(v){

    }
    isArrayOfNull(v){

    }
    isUndefined(v){

    }
    isArrayOfUndefined(v){

    }
    isRegX(v){

    }
    isArrayOfRegX(v){

    }
    // isArrayOfGuards(v){

    // }
    // isGuardObject(v){

    // }
    // isArrayOfGuardsInUse(v){

    // }
    // isGuardInUse(v){
    //     //if variable context doesn't change, even though the program context 
    //     //changes based on a guard variable already in use
    // }

}
