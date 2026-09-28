var total = 0;
for(var i = 2,len=process.argv.length;i<len;i++){
    total += +process.argv[i];
}
console.log(total);
