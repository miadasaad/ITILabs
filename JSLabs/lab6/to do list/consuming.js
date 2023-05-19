window.addEventListener("load",function(){
   
    
    let addButton=this.document.querySelector("button");
    let listsTable=this.document.querySelectorAll("table")[0];
    let todeList=document.querySelector("input[name=todo]");

    addButton.addEventListener('click',function(){
        let trElm = document.createElement('tr');
        let tdElm = document.createElement('td');
        let checkbox = document.createElement('input');
        let deleteButton = document.createElement('button');
        checkbox.setAttribute("type","checkbox");
        tdElm.append(checkbox);
        trElm.append(tdElm);

        tdElm = document.createElement('td'); 
        tdElm.innerText=todeList.value;
        trElm.append(tdElm);

        tdElm = document.createElement('td'); 
        deleteButton.innerText="Del";
        tdElm.append(deleteButton);
        trElm.append(tdElm);
        listsTable.append(trElm);

        deleteButton.addEventListener('click',function(){
            this.parentElement.parentElement.remove();
        })
        checkbox.onchange= function () {
            if(this.checked){
                this.parentElement.nextSibling.classList.add('textStyle')
            }
            else{
                this.parentElement.nextSibling.classList.remove('textStyle')
            }
            
        }

    })
    
  
})
