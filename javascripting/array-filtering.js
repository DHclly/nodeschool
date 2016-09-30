var numbers=[];
for(var i = 1;i<11;i++){
    numbers[i-1]=i;
}
console.log(numbers.filter(function(number){
    return number%2 ===0;
}))