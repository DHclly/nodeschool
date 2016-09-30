/*
var http = require('http');
var fs = require('fs');
var bl = require('bl');
http.createServer((req,res)=>{
    fs.createReadStream(process.argv[3]).pipe(bl((err,data)=>{
        if(err) return console.log(err);
        res.write(data);
    }));
}).listen(process.argv[2]);
*/
var http = require('http');
var fs = require('fs');
http.createServer((req,res)=>{
res.writeHead(200,{'content-type':'text/plain'});
fs.createReadStream(process.argv[3]).pipe(res);
}).listen(parseInt(process.argv[2]));