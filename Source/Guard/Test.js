import {Cell} from "./Cell.js"
//you cant have two optional variables with default behavior
//at the same level in a subschema


export const GUARDS=[
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
