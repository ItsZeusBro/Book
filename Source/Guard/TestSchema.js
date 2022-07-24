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