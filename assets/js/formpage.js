 /* This code handles the click event to submit the data of the form page 

function submitValues() {

    // Get references to form and table cells

    const firstNameCel = document.getElementById('firstNameValue');
    const surnameCel = document.getElementById('surnameValue');
    const phoneCel = document.getElementById('phoneValue');
    const emailCel = document.getElementById('emailValue');
    const cityCel = document.getElementById('cityValue');
    const countryCel = document.getElementById('countryValue');
 
     // Populate table cells with form field values
     firstNameCel.textContent = firstNameVal;
     surnameCel.textContent = surnameVal;
     phoneCel.textContent = phoneVal;
     emailCel.textContent = emailVal;
     cityCel.textContent = cityVal;
     countryCel.textContent = countryVal;
   
      // Return true to indicate successful submission
}
*/



// This code navigate to confirmation page

function navToPage() {
  
   window.location.href = "confirmation.html";
}  
 

/* This code builds the table to display on the confirmation page */

function printTable() {
 
   // Get form field values
   const firstNameVal = document.getElementById('firstName').value;
   const surnameVal = document.getElementById('surName').value;
   const phoneVal = document.getElementById('phoneNum').value;
   const emailVal = document.getElementById('emailAdd').value;
   const cityVal = document.getElementById('cityName').value;
   const countryVal = document.getElementById('countryName').value;

  let myHtml = 
  `<table>
     <tr>
     <th>FirstName</th>
     <th>Surname</th>
     <th>Phone</th> 
     <th>Email</th>
     <th>City</th>
     <th>Country</th>
     </tr>
  `
   let htmlTableRow =
    ` <tr> 
   <td> ${firstNameVal}</td> 
   <td> ${surnameVal}</td>
   <td> ${phoneVal}</td>
   <td> ${emailVal}</td>
   <td> ${cityVal}</td>
   <td> ${countryVal}</td>
   </tr> 
   
</table>`

  myHtml += htmlTableRow;
  document.getElementById('myTableBox').innerHTML = myHtml;
 }

    function tableStyle() {
   
      /*This code handles the table-grid style */

      let tableBoxes = document.getElementsByTagName('table');
 
      tableBoxes.style.width = "70%";
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


function goToConfirmation(event) {
   // Prevent default form submission
   event.preventDefault(); 
 navToPage();
 setTimeout(printTable(), 100);
 window.onload = tableStyle();

 } 
 
 let displayTable = document.getElementById('submitButton');
    displayTable.addEventListener('click', goToConfirmation);
