let numbers = [1,2,3,4,5];

let mapResults = numbers.map((data)=>{
    return  data + 1;
});


let filterResults = numbers.filter((data)=>{
    return data > 3;
});

console.log('map ->',mapResults);
console.log('filter ->',filterResults);