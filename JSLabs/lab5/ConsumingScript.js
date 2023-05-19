// a- Find all images in page by two ways (document default 
//     collection and document methods). 
console.log(document.images);
console.log(document.querySelectorAll('img'));

// b- Find all options for City drop down list.
console.log(document.querySelectorAll("select option"));

// c- Find all rows(tds) for second table in page. 

console.log(document.querySelectorAll('table')[1].querySelectorAll('td'));

// d- Find all elements that contain class name fontBlue and 
// BGrey. 
document.querySelectorAll(".fontBlue .BGrey");
console.log(document.querySelectorAll(".fontBlue.bGrey"));

// 2- Display the date with time on the document title (document.title) 
// which changed every second to show time with date. Note: use 
// .toLocalString() method of the Date Object. 


//console.log(new Date());//Sun Jan 01 2023 13:43:26 GMT-0800 (Pacific Standard Time)
let currentDate = setInterval(() => {
    document.title=new Date().toLocaleString();
}, 1000);

// 3- write function startSliding(ImgObject) which takes the image 
// Object to be slide on the page , and start changing the image every 
// second
// don’t make timer ID global return it from sliding function. then write 
// another function that stop image sliding 
// stopSliding(timerID) which stop sliding the image by taking the 
// timerID as an input. 
// Now call this function on console to control image sliding on the 
// page for any image.

let imgs =['http://127.0.0.1:5500/images/1.jpg','http://127.0.0.1:5500/images/2.jpg',
'http://127.0.0.1:5500/images/3.jpg','http://127.0.0.1:5500/images/4.jpg','http://127.0.0.1:5500/images/5.jpg','http://127.0.0.1:5500/images/6.jpg'];

let count;
function startSliding(ImgObject) {
    count = imgs.indexOf(ImgObject.src);
    let id = setInterval(() => {
        if(count>imgs.length){
            count = 0;
        }
        ImgObject.src = imgs[count+1];
        count++
    }, 3000);

    return id;
}
startSliding(document.querySelectorAll('img')[1]);
//clearInterval(id);











