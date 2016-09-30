var http = require('http'),
bufferList = require('bl'),
dataArr=[],
counter=0;

for(var i = 0;i<3;i++){
    setData(i);
}
function setData(index){
    http.get(process.argv[2+index],function(res){
        res.pipe(bufferList(function(err,data){
            if(err)return console.log(err);
            dataArr[index]=data.toString();
            if(++counter===3){
                printInfo();
            }
        }));
    });
}
function printInfo(){
    for(var i =0;i<dataArr.length;i++){
        console.log(dataArr[i]);
    }
}