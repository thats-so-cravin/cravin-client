'use strict';

//Lisener for Sign Up button
$('#sign-up-button').on('click', handleForm);

const dietPrefs = [
  // Allergies
  allowedAllergy[
    {description: 'Dairy-Free' , id: 396},
    {description: 'Egg-Free' , id: 397},
    {description: 'Gluten-Free', id: 393},
    {description: 'Peanut-Free' , id: 394},
    {description: 'Seafood-Free' , id: 398},
    {description: 'Sesame-Free' , id: 399 },
    {description: 'Soy-Free' , id: 400},
    {description: 'Sulfite-Free' , id: 401},
    {description: 'Tree Nut-Free' , id: 395},
    {description: 'Wheat-Free' , id: 392}
  ],

  // Diets
  allowedDiet[
    {description: 'Lacto Vegetarian' , id: 388},
    {description: 'Ovo Vegetarian' , id: 389},
    {description: 'Pescetarian' , id: 390},
    {description: 'Vegan' , id: 386},
    {description: 'Vegetarian' , id: 387},
    {description: 'Paleo' , id: 403}
  ]
];

// function CreateDietLinks() {

  // Get request to server, return preferences

function handleForm(event, callback) {
  event.preventDefault();
  console.log('in form')
  let userData = {};
  userData.username = $('#username').val();
  userData.password = $('#password').val();
  userData.foodPrefs = $('#food-prefs').val();
  $.post(`${app.ENVIRONMENT.apiUrl}/api/v1/thats-so-cravin`, userData)
    .then(callback(), console.log('successful form entry'))
    .catch(console.error);
} // end listener for Sign Up button