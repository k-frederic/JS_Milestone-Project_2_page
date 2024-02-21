
 
 /* This code opens the confirmation page */

 function openConfirmation() {
    window.open('confirmation.html');
    
 } 
 
 
function goToConfirmation(event) {
    openConfirmation() ;

  }

 let buttonBox = document.getElementById('tableBtn');
 buttonBox.addEventListener('click', goToConfirmation);
 

 

