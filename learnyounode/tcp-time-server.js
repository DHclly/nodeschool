var net = require('net');
function getFormatDate(){
    var d = new Date();
    return d.getFullYear()+'-'+parseDouble(d.getMonth()+1)+'-'+parseDouble(d.getDate())+' '+parseDouble(d.getHours())+':'+
    parseDouble(d.getMinutes())+'\n';
    function parseDouble(num){
        if(parseInt(num)<10)
        return '0'+num;
        return num;
    }
}
console.log(getFormatDate());
net.createServer(function(socket){
    socket.end(getFormatDate());
}).listen(process.argv[2]);

/*
     var net = require('net')

     function zeroFill(i) {
       return (i < 10 ? '0' : '') + i
     }

     function now () {
       var d = new Date()
       return d.getFullYear() + '-'
         + zeroFill(d.getMonth() + 1) + '-'
         + zeroFill(d.getDate()) + ' '
         + zeroFill(d.getHours()) + ':'
         + zeroFill(d.getMinutes())
     }

     var server = net.createServer(function (socket) {
       socket.end(now() + '\n')
     })

     server.listen(Number(process.argv[2]))
 */