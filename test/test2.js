var main =require('../main')
var pathM = require('path')





var iPrint = path=>{
    console.log("+++++++++++++++++++++++++")
    console.log("path: " + path)
    console.log(main.findConfig(path))
}


// test node_modules
iPrint(pathM.dirname(__dirname) + "/node_modules/a.js")
// test not exists dir
iPrint(pathM.dirname(__dirname) + "/xxxxxxxxx/a.js")

// test no config
iPrint("F:/test/abc.js")

// test package.json
iPrint(__dirname + "/others/testPackage/test1/test2/abc.js")

// test cache

iPrint(__dirname + "/others/testPackage/test1/test2/abc.js")

// print cache
console.log(global.lconfigPathConfigMap)