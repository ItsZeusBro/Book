//well formed book files should be indexed first in the world of information
//then something more general can be indexed second
export class Library {
    constructor(){

    }

}
//Every line needs a map to the original file location
//A size field (for choosing the most efficent search types)
//Some sort of indexing metadata

//Pages can be delimited by a litteral, or a pattern (you don't suffer regex performance hit more than once
//if you store into book file)

//Pages can be delimited by a byte or bit count (with a bitty count)
//(a bitty count is the number of bits at the end of a bit buffer that allows it to be an Octal 
//compliant buffer)
//it matters because you might be parsing nibbles or actual bit patterns and not necessarily
//byte patterns, but you still need the return of a page to be octal for processing

//Chapters are meant for loose association virtual indexing.
//Pages are are meant for closer NLP associations
//Line ordering can be optimized for even faster searches, or for helping humans visualize a page
//or chapter...
//This can index the entire world of information (maybe even dna)
// "Library":{
//     "book index":{

//     },
//     "book":{
//         "chapter_index":{
    
//         },
//         //chapter 1
//         "1":{
//             "page_index":{
    
//             },
//             "pages":{
//                 "line_index":{
    
//                 },
//                 "lines":{
//                     "1":{
    
//                     }
                
//                 }
//             },
//         },
//         //chapter 2
//         "2":{
//             "page_index":{
    
//             },
//             "pages":{
//                 "line_index":{
                    
//                 },
    
//             },
//         }
    
//     }
// }