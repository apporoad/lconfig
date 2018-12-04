var caller = require('caller.js')

/*
[ { fileName: 'f:\\workspace\\dcjet\\lconfig\\test\\test.js',
    functionName: 'invoke4',
    typeName: 'global',
    lineNumber: 23,
    cloumnNumber: 8,
    methodName: null },
  { fileName: 'f:\\workspace\\dcjet\\lconfig\\test\\test.js',
    functionName: 'invoke3',
    typeName: 'global',
    lineNumber: 18,
    cloumnNumber: 5,
    methodName: null },
  { fileName: 'f:\\workspace\\dcjet\\lconfig\\test\\test.js',
    functionName: 'invoke2',
    typeName: 'global',
    lineNumber: 13,
    cloumnNumber: 5,
    methodName: null },
  { fileName: 'f:\\workspace\\dcjet\\lconfig\\test\\test.js',
    functionName: 'invoke1',
    typeName: 'global',
    lineNumber: 8,
    cloumnNumber: 5,
    methodName: null },
  { fileName: 'f:\\workspace\\dcjet\\lconfig\\test\\test.js',
    functionName: null,
    typeName: 'Object',
    lineNumber: 26,
    cloumnNumber: 1,
    methodName: null } ]

*/
//todo 
const getInvokeFileChain = chain=>{
    //trim repeat

    //return filepaths
}


exports.set = (config,isOverride) =>{

}

exports.getLayer = ()=>{
}


exports.get= ()=>{
    //console.trace()
    console.log(caller.getChain())
}


exports.list = ()=>{

}