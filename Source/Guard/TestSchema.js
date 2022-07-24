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
            "isCell":[
                    {
                            'isEncoding':{
                                    'DEFAULT':'utf8',
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
                                        'DEFAULT':'utf8',
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