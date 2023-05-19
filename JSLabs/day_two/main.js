// // task one()

// function Numbers(start,end,step){

//     this.start =start;
//     this.end=end;
//     this.step = step;
//     // fill the list
//     var arrayOfNums=[];
//     function filArr(){
//         for (let i = 0; i <= (this.start+this.end)/this.step; i++) {    
//             arrayOfNums.push(i*step)
//             console.log(arrayOfNums[i]);
//         }
//     }
//     filArr.call(this)

//     // append
//     this.append = function (num) {
//         if (num == arrayOfNums[arrayOfNums.length-1] +step) {
//            arrayOfNums.push(num) 
//         }
//         //console.log(arrayOfNums[arrayOfNums.length-1]);
//     }
//     // get array
//     this.getArray = function ( ) {
//         return arrayOfNums
//     }
//     //prepend
//     this.prepend = function (num) {
//         if (num == arrayOfNums[0] -step) {
//            arrayOfNums.unshift(num) 
//         }
//         //console.log(arrayOfNums[0]);
//     }
//     //pop value
//     this.popNum= function () {
//         //console.log(arrayOfNums.length);
//         arrayOfNums.pop()
//         //console.log(arrayOfNums.length);
//     }
    

// }
// var newSeq = new Numbers(0,10,2)
// newSeq.append(11);
// console.log(newSeq.getArray());

// newSeq.prepend(-2)
// console.log(newSeq.getArray());
// newSeq.popNum()
// console.log(newSeq.getArray());