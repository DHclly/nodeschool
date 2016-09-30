/*
var http = require('http');
http.get(process.argv[2],function(res){
    var tmp ='';
    res.setEncoding('utf8');
    res.on('data',function(data){
        tmp+=data;
    }).on('end',function(){
        console.log(tmp.length);
        console.log(tmp);
    }).on('error',console.log);
}).on('error',console.log);
*/

var http = require('http'),
blist = require('bl');
http.get(process.argv[2],function(res){
    res.pipe(blist(function(err,data){
        if(err)
        return console.log(err);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});