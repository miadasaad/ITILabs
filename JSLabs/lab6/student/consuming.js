window.addEventListener("load",function(){


    //selections
    let addButton=this.document.querySelector("input[value=Add]");
    let studentsTable=this.document.querySelectorAll("table")[1];
    let nameTextBox=document.querySelector("input[name=studentName]");
    let gradeTextBox=document.querySelector("input[name=studentGrade]");
    let nameError =document.querySelector('#nameError');
    let gradeError =document.querySelector('#gardeError');
    let mynames; ///it's an array will select first td(name) from each tr
    let allNames =[]; //will take inner text from td
    //studentGrade

    //events
    addButton.onclick=function(){
       
        let departmentValue=document.querySelector("input[name=Department]:checked").value;
        let trElm;
        let tdElm;
        let gradeFlag;
        let nameFlag;
        let fullName ;
    
   
        //check the name
        if(nameTextBox.value.length>0){ 

            // converting name into pascal
            fullName = nameTextBox.value.toLowerCase().split(" ");
            for(let i=0; i<fullName.length;i++){
                console.log(fullName[i]);
                fullName[i]=fullName[i][0].toUpperCase()+fullName[i].slice(1);
                
            }

            fullName =fullName.join(" ");

            if(allNames.indexOf(fullName)==-1){// name isn't entered before

               
                document.querySelector('#nameFound').classList.add('hidden');
                nameError.classList.add('hidden');
                nameFlag=1;

            }
            
            else{// name is found
                document.querySelector('#nameFound').classList.remove('hidden');
                nameFlag=0;
            }

        }
        else{
            nameError.classList.remove('hidden');
            nameFlag=0;
        }
      //////////////////////////////////////////////////////////////////
      // chech the grade

      if(!isNaN(gradeTextBox.value) &&Number(gradeTextBox.value)>=0 && Number(gradeTextBox.value)<=100){
        gradeFlag=1;
        gradeError.classList.add('hidden');
      }
      else{
        gradeFlag=0;
        gradeError.classList.remove('hidden');
      }

     ///////////////////////////////////////////////////
     // creating row
     if(nameFlag && gradeFlag){

        //1- created tr
        trElm=document.createElement("tr"); //<tr></tr>
        trElm.classList.add(departmentValue);

        //2- created td 
        tdElm=document.createElement("td"); //<td></td>
        tdElm.innerText=fullName;  //<td>......</td>
        //3- td-> tr
         trElm.append(tdElm);

         tdElm=document.createElement("td");
         tdElm.innerText=gradeTextBox.value;
         trElm.append(tdElm);

         //-- delete
         let deleteImg=document.createElement("img");
         deleteImg.src="delete.PNG";
         deleteImg.classList.add("deleteSty")
         deleteImg.onclick=function(){

           let deletedName = this.parentElement.previousSibling.previousSibling.innerText;
           allNames.splice(allNames.indexOf(deletedName),1);
           this.parentElement.parentElement.remove();
           
         }
 
 
 
         tdElm=document.createElement("td");
         tdElm.append(deleteImg);
         trElm.append(tdElm);
 
 
         //4- tr-> table
         studentsTable.append(trElm);


         ///get the names of students in table td to check if repeated
         mynames= document.querySelectorAll('table')[1].querySelectorAll('tr td:first-child');
         for(let i=0 ;i<mynames.length ;i++){
            allNames.push(mynames[i].innerText);
         }
     }


    }  

    // filter

document.querySelector('select[name=grading]').addEventListener("change",function(){
   
    let allTr= document.querySelectorAll('table')[1].querySelectorAll('tr');

    for(let i=0 ;i<allTr.length ;i++){
        allTr[i].classList.remove('displayNone');
       }

    if(this.value=='all'){
       for(let i=0 ;i<allTr.length ;i++){
        allTr[i].classList.remove('displayNone');
       }
    }

    else if(this.value=="fail"){
       
        for(let i=0 ;i<allTr.length ;i++){
            if(Number(allTr[i].querySelectorAll('td')[1].innerText)>60){
                allTr[i].classList.add('displayNone');
            }
            
           }
    }
    else{// succeed
       
        for(let i=0 ;i<allTr.length ;i++){
            if(Number(allTr[i].querySelectorAll('td')[1].innerText)<60){
                allTr[i].classList.add('displayNone');
            }
            
           }
    }
});
  

});//load
