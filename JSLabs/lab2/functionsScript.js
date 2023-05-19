// b-calling function before definition line
//printVariables(2,4,6); //worked because of hoisting

function printVariables(value1 =0, value2 =0 ,value3 =0){

   let array_of_nums=[];

   array_of_nums[0] = value1;
   array_of_nums[1] = value2;
   array_of_nums[2] = value3;
   
   console.log(localVar); // undefined using var
   //console.log(localVar); // error , isn't defined
   //////
  var localVar =3;
  //    localVar = 3; //error 
   var testingVar=5;

   return array_of_nums;
}

//function take username from user

// function take_name(){

//   let userName = prompt("enter your name");

// while(!userName )
// {
//     userName =prompt("please enter a valid name");
// }


// }


function printSum()
{

  let num1 ;
  let sum=0;

  for (let i = 0; i < 2; i++) {
    
    do {
         num1 = prompt(`enter number${i+1}`);
      } 
    while (isNaN(num1) || num1 == null);

    sum += Number(num1);

   }
  console.log(sum);
 
}
