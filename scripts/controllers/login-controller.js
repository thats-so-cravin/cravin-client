'use strict';

function handleForm(event) {
  event.preventDefault();
  console.log('in form')

  let userData = {};
  let allergyStr = `&${$('#allowedAllergy').on().attr('id')}[]=${$('select option:selected').attr('id')}`;

  let dietStr = `&${$('#allowedDiet').on().attr('id')}[]=${$('select option:selected').attr('id')}`;

  userData.username = $('#username').val();
  userData.password = $('#password').val();
  userData.allowed_allergy = allergyStr;
  userData.allowed_diet = dietStr;


  $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/thats-so-cravin`, userData)
    .then(console.log(allergyStr, dietStr))
    .catch(console.error);
  console.log(userData);


  // and use in API call

} // end listener for Sign Up button

function initLogIn() {
  showLogIn();
  handleForm();
}