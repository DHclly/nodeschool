var http = require('http'),
    dataArr = [],
    counter = 0;

for (var i = 0; i < 3; i++) {
    setData(i);
}
function setData(index) {
    http.get(process.argv[2 + index], function (res) {
        var tmp = '';
        res.setEncoding('utf8');
        res.on('data', function (data) {
            tmp += data;
        }).on('end', function () {
            dataArr[index] = tmp;
            if (++counter === 3) {
                printInfo();
            }
        }).on('error', console.log);
    });
}
function printInfo() {
    for (var i = 0; i < dataArr.length; i++) {
        console.log(dataArr[i]);
    }
}
