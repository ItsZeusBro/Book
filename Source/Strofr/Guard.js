class Guard{
    constructor(v1, v2, v3, obj){
        //v1 uses a set of types
        //v2 uses a dictionary of context rules based on v1
        //v3 follows v2 model
    }
}
class ExceptionSet{
    //this is an unordered ordered set where everything but the last element of the set
    //is unordered, and the last element of the set is a catch all exception
    constructor(array){

    }
}
//All of these constants represent predefined or base guard functions (its extensible)
//This is an example of an "Exception Ordered Set" (OBJ means anything other than the )
//[ARRAY_OF_STRINGS, STRING, ARRAY_OF_BUFFERS, BUFFER, CELL, EXCEPTION]
//{
//  "ARRAY_OF_STRINGS": [ARRAY_OF_STRINGS, STRING, NULL],
// "STRING": [SEPARATOR, ]
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