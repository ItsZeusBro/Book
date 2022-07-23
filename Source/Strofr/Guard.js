const GUARD={
    'v':{
        'STRING_ARRAY':{
                'ENCODING_ARRAY':null,
                'ENCODING':null,
                'NULL':null,
                'ELSE': 'ERROR' //we do this because we can easily generate meaningful error messages here from what we know
        }, 

        'STRING':{
                'SEPARATOR':{

                }, 
                'ENCODING':{

                },
                'ENCODING_ARRAY':{

                }
                'NULL':{
                    
                }

        }, 
        "BUFFER_ARRAY":{
                'ENCODING_ARRAY':{

                }, 
                'ENCODING':{

                }, 
                'NULL':{

                }
        },
        "BUFFER":{
		        'SEPARATOR':{

                }, 
                'ENCODING_ARRAY':{

                }, 
                'ENCODING':{

                }, 
                'NULL':{

                }
        }
        "CELL":{
                'NULL':{

                },
                'ENCODING':{

                }
        }
    }

}

class Guard{
    //v is just a schema that get passed in
    constructor(v, obj){
        this.cc;
        this.fm;
        this.contextChain(v)
        this.functionMap()
        this.guard(this.contextChain)
        //what we want is to calculate the context chain of guards called
        //v1 uses a set of types
        //v2 uses a dictionary of context rules based on v1
        //v3 follows v2 model
    }
    // {
    //     "hash1":isFunction1,
    //     "hash2":isFunction2
    //     //whatever else

    // }
    guard(){
        //takes the context chain, (which maps the functions to the variables) and calls chain
        for (const [key, value] of Object.entries(this.cc)) {
            //this.cc[key] //holds the variable associated with key which is a hash mapped to a function
            this.fm[key](this.cc[key]) //this calls the function mapped to the key on the variable mapped on the key
        }
    }
    contextChain(){
        //creates the context chain
    }
    functionMap(){
        //this grabs the actual isFunctions() and maps them to a hash

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
    isArrayOfGuards(v){

    }
    isGuardObject(v){

    }
    isArrayOfGuardsInUse(v){

    }
    isGuardInUse(v){
        //if variable context doesn't change, even though the program context 
        //changes based on a guard variable already in use
    }
    isAnythingElse(v){

    }
}

class StrofrGuard extends Guard{
    constructor(){

    }


}


class ExceptionSet{
    //this is an unordered ordered set where everything but the last element of the set
    //is unordered, and the last element of the set is a catch all exception
    constructor(array){

    }
}
//Built in Guards: STRING, ARRAY_OF_STRING, OBJ, DICTIONARY, ARRAY_OF_DICTIONARY, INT, ARRAY_OF_INT
//ARRAY_OF_OBJECTS, BUFFER, ARRAY_OF_BUFFER, NULL, 
//RULES: 
//1. NULL is an object because if it wasn't you couldn't accept it in an array of Objects
//2. UNDEFINED is not an object, meaning GUARD will not accept it, unless specified
//3. 

//All of these constants represent predefined or base guard functions (its extensible)
//This is an example of an "Exception Ordered Set" (OBJ means anything other than the )
//[ARRAY_OF_STRINGS, STRING, ARRAY_OF_BUFFERS, BUFFER, CELL]
//{
//  "ARRAY_OF_STRINGS": [ARRAY_OF_STRINGS, STRING, NULL],
// "STRING": [SEPARATOR, ARRAY_OF_STRINGS, ENCODING]
//}
//
//
//call the variables at the top level whatever you want, it doesn't matter to how underlying guards perform

//
//
//



//strofr can be a array of strings, objects, buffers, or cells
		//it can also be a string, object, or cell
		//it can also be a buffer that is any of the above	
	//mod can be a separator (only if strofr is a string or array of strings) 
		//mod can be an encoding if its anything else
	//mod2 can be an encoding if mod1 is a separator for a string or buffer