

// This code navigate to confirmation page

function navToPage() {
  
   window.location.href = "confirmation.html";
}  
 
  
function goToTable(event) {

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
      <td> ${document.getElementById('firstName').value}</td> 
      <td> ${document.getElementById('surName').value}</td>
      <td> ${document.getElementById('phoneNum').value}</td>
      <td> ${document.getElementById('emailAdd').value}</td>
      <td> ${document.getElementById('cityName').value}</td>
      <td> ${document.getElementById('countryName').value}</td>
      </tr> 
     </table> 
   </div> 
   `
   document.getElementById("myTableBox").innerHTML =  myHtml
   
   
   let tableBoxes = document.getElementsByTagName('table');
    
   tableBoxes[0].style.width = "40%";
   tableBoxes[0].style.display = 'grid';
   tableBoxes[0].style.padding = '1rem';
   
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
    
    let displayTable = document.getElementById('tabletButton');
       displayTable.addEventListener('click', goToTable);
   
   