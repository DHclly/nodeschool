var http = require('http');
http.createServer(function (req, res) {
    if (req.method != 'POST') {
        return res.end('send me a POST requset \n');
    }
    req.on('data', function (chunk) {
        res.write(chunk.toString().toUpperCase());
    });
    req.on('end', function () {
        res.end();
    });
}).listen(Number(process.argv[2]));
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
