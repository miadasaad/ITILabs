function moveBottom() {

    let leftImg = Math.floor(Math.random() *10)*100;
    let imgEgg =document.querySelector('.egg');
    let imgBasket =document.querySelector('.basket');
    let imgBroken =document.querySelector('.broken');
    
    imgEgg.classList.remove('hidden')// for second calling
    imgEgg.style.left=leftImg+'px';
    let top=-200;
    imgEgg.style.top=top+'px';

    let id = setInterval(function(){
        top+= 5;

    if((top+imgEgg.height<(innerHeight-imgBasket.height+100)) ){    
        imgEgg.style.top=top+'px';  
    }

    else{
        clearInterval(id);
         let rangeNums= range(imgBasket.offsetLeft-60,imgBasket.offsetLeft+imgBasket.width-150);

        if(rangeNums.indexOf(imgEgg.offsetLeft) >-1){
           imgEgg.classList.add('hidden');
           imgBroken.classList.add('hidden');
           
         }
        else{
           imgEgg.classList.add('hidden');
           imgBroken.classList.remove('hidden');
           imgBroken.style.left=imgEgg.style.left;
           window.setTimeout(removeImg, 1500);
           function removeImg(){
            imgBroken.classList.add('hidden');
            }
          
        }
        moveBottom();
       }       
     },30);
}


function range(start, end) {
    let ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

///key pressing
function keyPressing(){
    let imgBasket =document.querySelector('.basket'); 
    let moveLeft = imgBasket.offsetLeft;
    window.addEventListener('keyup',function(event){
     
     
     imgBasket.style.left = imgBasket.offsetLeft+'px';
     if (event.code=='ArrowLeft') {
         moveLeft -= 30;
         imgBasket.style.left= moveLeft+'px';
     }
     else if (event.code=='ArrowRight') {
         moveLeft += 30;
         imgBasket.style.left= moveLeft+'px';
     }
    })
}