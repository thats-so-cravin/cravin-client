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

function showLogIn() {
  viewResetter();
  $('.login-view').show();
}