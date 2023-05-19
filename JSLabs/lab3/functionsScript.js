// const convert_pascal = function(fullName){

//    let small_string ="";
//    let final_string="";
//    let tempArray = [];

//   small_string = fullName.toLowerCase().split(" "); //["my", "name" ,"is","mayada"]

//   for(let i=0 ;i<small_string.length ;i++)
//   {

//    //   final_string = small_string[i][0].toUpperCase() + small_string[i].slice(1);
//    //   tempArray.push(final_string);
//      tempArray.push(small_string[i][0].toUpperCase() + small_string[i].slice(1))

//   }

//   console.log(tempArray.join(" "));

// }

// const longestWord = function (sentence) {
  
//    let splitted_array = sentence.split(" ");
//    let long_word =splitted_array[0];

//    for(let i=0; i<splitted_array.length; i++){
       
//       if(long_word.length < splitted_array[i].length)
//       {
//          long_word = splitted_array[i];
//       }
//    }
//    // console.log(long_word);
//    return long_word;
// }

// const sort_string = function(word){

//    word =word.split("");
//    let temp;

//    for(let i=0 ; i<word.length  ;i++){

//       for(let j =0 ;j<word.length-1;j++){

//          if(word.join("").charCodeAt(j)> word.join("").charCodeAt(j+1)){

//              temp = word[j];
//              word[j] = word[j+1];
//              word[j+1] =temp
//          }
//       }
      
//    }
//    //console.log(word);
//    return word.join("");
// }

// const randomArray = function(){
//    let size ;  
//    let random_array=[] ;
     
//      do {
//           size = prompt(`enter size`);
//        } 
//      while (isNaN(size) || size == null);
 
//      for(let i=0 ; i< Number(size);i++){

//           random_array.push(Math.floor((Math.random() *10))+1);
//      }
 
//     console.log(random_array);
//     return random_array;


// }

const get_month = function(){
   const month = ["jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
   let current_date = new Date;

   console.log(month[current_date.getMonth()]);
}








