var fs = require("fs"),
path  = require("path");
module.exports=function(folderName,extname,cb){
    fs.readdir(folderName,function(err,list){
        if(err){
            return cb(err);
        }
        list.filter(function(file){
            return path.extname(file)==='.'+extname;
        });
        cb(null,list);
    })
}