var http = require('http'),
    url = require('url');
http.createServer((req, res) => {
    var resdata = null;
    if (req.method != 'GET') {
        resdata = 'send me a GET requset \n';
    }
    var urlObj = url.parse(req.url, true);
    var date = new Date(urlObj.query.iso);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if (urlObj.pathname === '/api/parsetime') {
        resdata = JSON.stringify({
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        })
    }
    if (urlObj.pathname === '/api/unixtime') {
        resdata = JSON.stringify({
            "unixtime": date.getTime(),
        })
    }
    res.end(resdata);
}).listen(parseInt(parseInt(process.argv[2])));


/*
     var http = require('http')
     var url = require('url')

     function parsetime (time) {
       return {
         hour: time.getHours(),
         minute: time.getMinutes(),
         second: time.getSeconds()
       }
     }

     function unixtime (time) {
       return { unixtime : time.getTime() }
     }

     var server = http.createServer(function (req, res) {
       var parsedUrl = url.parse(req.url, true)
       var time = new Date(parsedUrl.query.iso)
       var result

       if (/^\/api\/parsetime/.test(req.url))
         result = parsetime(time)
       else if (/^\/api\/unixtime/.test(req.url))
         result = unixtime(time)

       if (result) {
         res.writeHead(200, { 'Content-Type': 'application/json' })
         res.end(JSON.stringify(result))
       } else {
         res.writeHead(404)
         res.end()
       }
     })
     server.listen(Number(process.argv[2]))
 */