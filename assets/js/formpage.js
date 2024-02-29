
 /* This code opens the confirmation page */

 function openConfirmation() {
    window.open('confirmation.html');
    
 } 
 


 /* This code handles the table-grid style on the confirmation page */
function tableStyle() {
   
   let tableBoxes = document.getElementsByTagName('table');

   tableBoxes.style.width = "30%";
   tableBoxes.style.display = 'grid';
   tableBoxes.style.padding = '1rem';
   
   let tableRow = document.getElementsByTagName('tr');
   
    for(let i = 0; i < tableRow.length; i++ ){
       tableRow[i].style.border = '1px solid black';
    }
   
    let tableHeader = document.getElementsByTagName('th');
    for(let i = 0; i < tableHeader.length; i++ ){
       tableHeader[i].style.border = '1px solid black';
    }
   
    let tableData = document.getElementsByTagName('td');
    for(let i = 0; i < tableData.length; i++ ){
       tableData[i].style.border = '1px solid black';

    }

}


 /* This code handles the click event to submit the data of the form page */
function goToConfirmation(event) {
    openConfirmation() ;
  
  }

 let buttonBox = document.getElementById('tableBtn');
 buttonBox.addEventListener('click', goToConfirmation);
 
