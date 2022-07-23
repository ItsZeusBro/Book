
class Guard{
    constructor(v1, v2, v3, obj){
        this.contextChain;
        this.calculate(v1, v2, v3, obj)
        this.guard(this.contextChain)
        //what we want is to calculate the context chain of guards called
        //v1 uses a set of types
        //v2 uses a dictionary of context rules based on v1
        //v3 follows v2 model
    }
    guard(){

    }
    calculate(){

    }
    isString(){

    }
    isArrayOfString(){

    }

    isObj(){

    }
    isArrayOfObj(){

    }
    isDictionary(){

    }
    isArrayOfDictionary(){

    }
    isInt(){

    }
    isArrayOfInt(){

    }
    isBuffer(){

    }
    isArrayOfBuffer(){

    }
    isNull(){

    }
    isArrayOfNull(){

    }
    isUndefined(){

    }
    isArrayOfUndefined(){

    }
    isRegX(){

    }
    isArrayOfRegX(){

    }
    isArrayOfGuards(){

    }
    isGuardObject(){

    }
    isArrayOfGuardsInUse(){

    }
    isGuardInUse(){
        //if variable context doesn't change, even though the program context 
        //changes based on a guard variable already in use
    }
    isAnythingElse(){

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
//[ARRAY_OF_STRINGS, STRING, ARRAY_OF_BUFFERS, BUFFER, CELL, EXCEPTION]
//{
//  "ARRAY_OF_STRINGS": [ARRAY_OF_STRINGS, STRING, NULL],
// "STRING": [SEPARATOR, ARRAY_OF_STRINGS, ENCODING]
//}
//
//
//
//



//strofr can be a array of strings, objects, buffers, or cells
		//it can also be a string, object, or cell
		//it can also be a buffer that is any of the above	
	//mod can be a separator (only if strofr is a string or array of strings) 
		//mod can be an encoding if its anything else
	//mod2 can be an encoding if mod1 is a separator for a string or buffer