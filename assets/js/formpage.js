window.addEventListener('pageshow', function(event) {

   var historyTraversal = event.persisted || 
   (typeof window.performance != 'undefined' && 
    window.performance.navigation.type === 2);

   if (historyTraversal) {
       // Perform actions to refresh the page or update content
       window.location.reload();
   }
});  // This code above by questioning chatgpt 


 
// ----------- This code handles the table display conditioned by the form filling ---------------//

let tableDisplayed = false;

function goToTable(event) {
   event.preventDefault(); 

let firstNameValue = document.getElementById('firstName').value;
let surNameValue = document.getElementById('surName').value;
let phoneNumValue = document.getElementById('phoneNum').value;
let emailAddValue = document.getElementById('emailAdd').value;
let cityNameValue = document.getElementById('cityName').value;
let countryNameValue = document.getElementById('countryName').value;


if ( firstNameValue && surNameValue && phoneNumValue && emailAddValue && cityNameValue && countryNameValue) {
    
   tableDisplayed = true;
   // Table value code
   let myHtml =
   
   `  <div >
      <table>
       <tr>
       <th>FirstName</th>
       <th>Surname</th>
       <th>Phone</th> 
       <th>Email</th>
       <th>City</th>
       <th>Country</th>
       </tr>
    
        <tr> 
     <td> ${firstNameValue}</td> 
     <td> ${surNameValue}</td>
     <td> ${phoneNumValue}</td>
     <td> ${emailAddValue}</td>
     <td> ${cityNameValue}</td>
     <td> ${countryNameValue}</td>
     </tr> 
    </table> 
  </div> 
  `
  document.getElementById("myTableBox").innerHTML =  myHtml
  
  
  let tableBoxes = document.getElementsByTagName('table');
   
  tableBoxes[0].style.width = "100%";
  tableBoxes[0].style.padding = '1rem';
  tableBoxes[0].style.margin = 'auto';
 
  
  let tableRow = document.getElementsByTagName('tr');
  
   for(let i = 0; i < tableRow.length; i++ ){
      tableRow[i].style.border = '2px solid black';
   }
  
   let tableHeader = document.getElementsByTagName('th');
   for(let i = 0; i < tableHeader.length; i++ ){
      tableHeader[i].style.border = '2px solid black';
   }
  
   let tableData = document.getElementsByTagName('td');
   for(let i = 0; i < tableData.length; i++ ){
      tableData[i].style.border = '2px solid black';
   }  
  
    let textArea = document.getElementById('feedBack');
    textArea.textContent = "we need to hear from you, how did you hear about us ?";
   }

   else {
      alert('All requested details must be entered first!');
   }

    } 

    const displayTable = document.getElementById('submitEvent');

    displayTable.addEventListener('click',  goToTable);
    

// ----------- This code handles the navigation to the confirmation page ---------------//

function navToPage(event) {
   event.preventDefault()
  
   // Check if goToTable has been triggered first
   if (tableDisplayed) {

    // Check if checkbox is checked or not
   if (event.target.checked) {

      var firstNameValue = document.getElementById('firstName').value;
      var surNameValue = document.getElementById('surName').value;
      var phoneNumValue = document.getElementById('phoneNum').value;
      var emailAddValue = document.getElementById('emailAdd').value;
      var cityNameValue = document.getElementById('cityName').value;
      var countryNameValue = document.getElementById('countryName').value;

      if ( firstNameValue && surNameValue && phoneNumValue && emailAddValue && cityNameValue && countryNameValue) {

            window.location.href = "confirmation.html";
         
       } 
      }  
       else {
               alert('All requested details must be entered to be able to submit!');
              let checkBoxValue = document.getElementById('checkBox');
              checkBoxValue.checked = false;
       }
      } 
       else {
      // Perform actions when checkbox is unchecked
      alert("Submit first, and then you'll be able to continue.");
      let checkBoxValue = document.getElementById('checkBox');
      checkBoxValue.checked = false;
     }
} 
 
const chkBox = document.getElementById('checkBox');
chkBox.addEventListener('change', navToPage);

  