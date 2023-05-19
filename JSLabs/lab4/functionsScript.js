let numbers = [2,1,3,2,7,2,8,4,3,6,10,9,12];

//console.table(numbers.sort((a,b)=> a-b)); //ascending

//console.table(numbers.reverse()); // sorting the reversing
let descending_array = numbers.sort((a,b)=> b-a); // descending


//filter numbers larger than 5
let numGth5 = numbers.filter((item)=> item>5);
//console.log(numGth5);

// max an min
//console.log(Math.max(...numbers));
//console.log(Math.min(...numbers));

// repeated numbers from array
let unique_array= [...numbers];
let temp_array =[];

temp_array =unique_array.filter((item, index)=> {
   
   return unique_array.indexOf(item) === index ;
})
console.log(temp_array);



