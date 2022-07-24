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
        'isEncoding': {
            'DEFAULT':'utf8',
            'FUNCTION': 'isStringIsSeparatorIsEncoding'
        }    
    }
]