var fs = require("fs"),
path  = require("path"),
folder = process.argv[2],
ext  ='.'+process.argv[3];
fs.readdir(folder,function(err,list){
    if(err){
        return console.error(err);
    }
    list.forEach(function(value,index){
        if(path.extname(value)===ext){
            console.log(value);
        }
    });
});