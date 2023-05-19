
window.addEventListener("load" ,function() {
    
    // find
    let divObj =[];

    // do
    let body =document.querySelector("body");
      
    body.addEventListener('click',function(event) {  
            //if(divObj.indexOf(ev))
            if(divObj.indexOf(Array.prototype.indexOf.call(body.children, event.target)) == -1){
                
                body.insertBefore(event.target.cloneNode(true),body.children[document.querySelectorAll('div').length]);
                divObj.push(Array.prototype.indexOf.call(body.children, event.target));
                event.target.classList.add('unclicked');
            }
            
           //console.log(Array.prototype.indexOf.call(body.children, event.target));
            
        }
        ,true) 
        

})


