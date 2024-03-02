/*
function formValues() {

   let theFirstName = document.getElementById('first_name');
   let theSurname = document.getElementById('surname');
   let thePhone = document.getElementById('phone');
   let theEmail = document.getElementById('email');
   let theCity = document.getElementById('city');
   let theCountry = document.getElementById('country');
  
   let thisFirstName = document.getElementById('firstNameValue');
   thisFirstName.textContent = theFirstName.value;

   let thisSurname = document.getElementById('surnameValue');
   thisSurname.textContent = theSurname.value;

   let thisPhone = document.getElementById('phoneValue');
   thisPhone.textContent = thePhone.value;

   let thisEmail = document.getElementById('emailValue');
   thisEmail.textContent = theEmail.value;

   let thisCity = document.getElementById('cityValue');
   thisCity.textContent = theCity.value;

   let thisCountry = document.getElementById('countryValue');
   thisCountry.textContent = theCountry.value;
} 
 
function testButton(event) {
   

}

 
let testButtonBox = document.getElementById('tableBtn');
testButtonBox.addEventListener('click', testButton);   
*/

// Get references to form and table cells
const form = document.getElementById('myForm');
const firstNameCel = document.getElementById('firstNameValue');
const surnameCel = document.getElementById('surnameValue');
const phoneCel = document.getElementById('phoneValue');
const emailCel = document.getElementById('emailValue');
const cityCel = document.getElementById('cityValue');
const countryCel = document.getElementById('countryValue');

// Listen for form submission event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    window.open('confirmation.html');

    window.addEventListener('load', function() {
        
        // Your code to execute when the page loads
  

    // Get form field values
    const firstName = document.getElementById('first_name').value;
    const surname = document.getElementById('surname').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    // Populate table cells with form field values
    firstNameCell.textContent = firstName;
    surnameCell.textContent = surname;
    phoneCell.textContent = phone;
    emailCell.textContent = email;
    cityCell.textContent = city;
    countryCell.textContent = country;

 //  Open the page confirmation
});
   
});
 
