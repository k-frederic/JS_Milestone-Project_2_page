
 /* This code handles the table-grid style on the confirmation page 
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
*/

 /* This code handles the click event to submit the data of the form page */

 

function submitValues() {
 
   // Get references to form and table cells
   const form = document.getElementById('myForm');
   const firstNameCel = document.getElementById('firstNameValue');
   const surnameCel = document.getElementById('surnameValue');
   const phoneCel = document.getElementById('phoneValue');
   const emailCel = document.getElementById('emailValue');
   const cityCel = document.getElementById('cityValue');
   const countryCel = document.getElementById('countryValue');
   
 
   // Get form field values
   const firstNameVal = document.getElementById('firstName').value;
   const surnameVal = document.getElementById('surName').value;
   const phoneVal = document.getElementById('phoneNum').value;
   const emailVal = document.getElementById('emailAdd').value;
   const cityVal = document.getElementById('cityName').value;
   const countryVal = document.getElementById('countryName').value;
 
     // Populate table cells with form field values
     firstNameCel.textContent = firstNameVal;
     surnameCel.textContent = surnameVal;
     phoneCel.textContent = phoneVal;
     emailCel.textContent = emailVal;
     cityCel.textContent = cityVal;
     countryCel.textContent = countryVal;
   
      // Return true to indicate successful submission
    return true;
}

 

function navToPage() {
  
   // This code navigate first to confirmation page
 
   window.location.href = "confirmation.html";
   
}



function goToConfirmation(event) {
   // Prevent default form submission
   event.preventDefault(); 

    // Check if submitValues() returns true
    if (submitValues() === true) {
      navToPage(); // Navigate to confirmation page
  }
 }

 let inputButton = document.getElementById('submitBtn');
 inputButton.addEventListener('click', goToConfirmation);
 