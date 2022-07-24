export const GUARD=[
    {
            'isString':[
                    {
                            'isSeparator':[
                                    {
                                            'isEncoding': {
                                                'DEFAULT':'utf8',
                                                'FUNCTION': 'isStringIsSeparatorIsEncoding'
                                            }    
                                    }
                            ]
                    }, 
                    {
                            'isEncoding':{
                                    'DEFAULT':'utf8',
                                    'FUNCTION': 'isStringIsEncoding'
                            }
                    },
                    {
                            'isEncodingArray':'isStringIsEncodingArray'
                    }   
            ]
    },
    {
            'isInteger':[
                    {
                            'isInteger': {
                                'DEFAULT':10,
                                'FUNCTION': 'isIntegerIsInteger'
                            }    
                    },

                    {
                            'isString':{
                                "DEFAULT":"",
                                "FUNCTION": 'isIntegerIsString'
                            }
                    },
                    {
                            'isIntegerArray':{
                                "DEFAULT":[],
                                "FUNCTION": 'isIntegerIsIntegerArray'
                            }
                    },
                    {
                            'isArray':[
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
            'isArray':'isStringIsSeparatorIsEncoding' 
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
        console.log("isStringIsSeparatorIsEncoding(", v, ")")
    }
    
}

class Test{
    constructor(){
        this.constructorTests()
    }

    constructorTests(){
        new TestObj()
    }
}

