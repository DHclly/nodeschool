var map = require("through2-map"),
    http = require('http');
http.createServer((req, res) => {
    if (req.method != 'POST') {
        return res.end('send me a POST requset \n');
    }
    req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res)
})
    .listen(parseInt(parseInt(process.argv[2])));

/*
 var http = require('http')
     var map = require('through2-map')

     var server = http.createServer(function (req, res) {
       if (req.method != 'POST')
         return res.end('send me a POST\n')

       req.pipe(map(function (chunk) {
         return chunk.toString().toUpperCase()
       })).pipe(res)
     })

     server.listen(Number(process.argv[2]))
 */