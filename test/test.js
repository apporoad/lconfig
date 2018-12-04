var lc = require('../index')




var invoke1 = function(){
    console.log("invoke1")
    invoke2()
}

var invoke2 = function(){
    console.log("invoke2")
    invoke3()
}

var invoke3 = function(){
    console.log("invoke3")
    invoke4()
}

var invoke4 = function(){
    console.log("invoke5")
    lc.get()
}

invoke1()