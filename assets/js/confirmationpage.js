
function formValues() {

   let theFirstName = document.getElementById('first_name');
   let theSurname = document.getElementById('surname');
   let thePhone = document.getElementById('phone');
   let theEmail = document.getElementById('email');
   let theCity = document.getElementById('city');
   let theCountry = document.getElementById('country');
  
   let thisFirstName = document.getElementById('firstNameValue');
   thisFirstName.innerHTML = theFirstName.value;

   let thisSurname = document.getElementById('surnameValue');
   thisSurname.innerHTML = theSurname.value;

   let thisPhone = document.getElementById('phoneValue');
   thisPhone.innerHTML = thePhone.value;

   let thisEmail = document.getElementById('emailValue');
   thisEmail.innerHTML = theEmail.value;

   let thisCity = document.getElementById('cityValue');
   thisCity.innerHTML = theCity.value;

   let thisCountry = document.getElementById('countryValue');
   thisCountry.innerHTML = theCountry.value;
}
 
function testButton(event) {
    formValues()
}

 
let testButtonBox = document.getElementById('testBtn');
testButtonBox.addEventListener('click', testButton);
 
