'use strict';

//Lisener for Sign Up button
$('#submit').on('click', handleForm);

function handleForm(event) {
  event.preventDefault();
  console.log('in form')
  let userData = {};
  userData.first_name = $('#first-name').val();
  userData.last_name = $('#last-name').val();
  userData.username = $('#username').val();
  userData.password = $('#password').val();
  $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/thats-so-cravin`, userData)
    .then(console.log('successful form entry'))
    .catch(console.error);
} // end listener for Sign Up button