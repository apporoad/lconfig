const fs = require('fs')
const pathM = require('path')
const config = require('./config.json')

// global store lconfig.map
global.lconfigPathConfigMap = global.lconfigPathConfigMap || {}
var lpcm = global.lconfigPathConfigMap

const MapGet = path =>{
    var rk =  pathM.dirname(path).replace(/\//g,'_').replace(/\\/g,'_')  + "_key"
    return lpcm[rk]
}

const MapSet =(path,configFiles) => {
    if(configFiles && configFiles.length > 0){
        var rk =  pathM.dirname(path).replace(/\//g,'_').replace(/\\/g,'_')  + "_key"
        lpcm[rk] = configFiles
    }
    return configFiles
}

var iFindConfig= path=>{
    //use cache
    if(MapGet(path)){
        //console.log("cache success")
        return MapGet(path)
    }
    if(!path) return null
    var dir = pathM.dirname(path)
    if(pathM.basename(dir) =="node_modules"){
        //console.log("abc")
        return null
    }
    if(!fs.existsSync(dir)){
        //console.log("abcd")
        return null
    }
    var configFiles = new Array()

    if(fs.existsSync(dir + "/" + config.defaultConfigName + ".js" )){
        configFiles.push(dir + "/" + config.defaultConfigName + ".js" )
    }else if(fs.existsSync(dir + "/" + config.defaultConfigName + ".json" ) ){
        configFiles.push(dir + "/" + config.defaultConfigName + ".json" )
    }
    //if contains package.json
    if(fs.existsSync(dir + "/package.json")){
        return configFiles
    }
    var ptArray = iFindConfig(dir)
    if(ptArray){
        configFiles = configFiles.concat(ptArray)
    }
    return configFiles
}


exports.findConfig = path=>{
    /*
        /test/abc/a.js  => 
            1. find /test/abc/config.js(config.json)
            2. inf(if not find)  find /test/config.js(config.json)
            3. inf  finde /test/config.js(config.json)
            4. ...
        ps: if the dir is node_moudles or find package.json stop recurse
     */
    //use cache
    return MapSet(path,iFindConfig(path))
}

