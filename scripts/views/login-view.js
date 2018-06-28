'use strict';

//Lisener for Sign Up button
$('#sign-up-button').on('click', handleForm);

// CHANGE-TODO: Probably want to delete these at some point if we don't use

// const allowedAllergy = {
//   dairy: {description: 'Dairy-Free', id: 396},
//   egg: {description: 'Egg-Free', id: 397},
//   gluten: {description: 'Gluten-Free', id: 393},
//   peanut: {description: 'Peanut-Free', id: 394},
//   seafood: {description: 'Seafood-Free', id: 398},
//   sesame: {description: 'Sesame-Free', id: 399},
//   soy: {description: 'Soy-Free', id: 400},
//   sulfite: {description: 'Sulfite-Free', id: 401},
//   treeNut: {description: 'Tree Nut-Free', id: 395},
//   wheat: {description: 'Wheat-Free', id: 392}
// };

// const allowedDiet = {
//   lactoVeg: {description: 'Lacto Vegetarian', id: 388},
//   ovoVeg: {description: 'Ovo Vegetarian', id: 389},
//   pesc: {description: 'Pescetarian', id: 390},
//   vegan: {description: 'Vegan', id: 386},
//   veg: {description: 'Vegetarian', id: 387},
//   paleo: {description: 'Paleo', id: 403}
// };

// function CreateDietLinks() {

// Get request to server, return preferences

function handleForm(event) {
  event.preventDefault();
  console.log('in form')

  let userData = {};
  
  let allergyStr = `&${$('#allowedAllergy').on().attr('id')}[]=${$('#allowedAllergy option:selected').attr('id')}`;

  let dietStr = `&${$('#allowedDiet').on().attr('id')}[]=${$('#allowedDiet option:selected').attr('id')}`;

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

function showLogIn() {
  app.viewResetter();
  $('.login-view').show();
}
