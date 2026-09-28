var fs = require("fs"),
file = process.argv[2];
fs.readFile(file,'utf8',function(err,data){
    if(!err){
        var arr =data.split('\n');
        console.log(arr.length-1);
    }
}); 