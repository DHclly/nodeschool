var pets = ['cat', 'dog', 'rat'];
pets.map(function(value,index,arr){
    arr[index] = value+'s';
})
console.log(pets);