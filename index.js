var stackTrace = require('stack-trace');


exports.set = (config,isOverride) =>{

}

exports.getLayer = ()=>{
}


exports.get= ()=>{
    console.trace()
    var trace = stackTrace.get()

    trace.forEach(element => {
        console.log(element.getFileName() + " " + element.getMethodName())
        //console.log(element)
    });
}


exports.list = ()=>{

}