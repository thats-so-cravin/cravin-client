'use strict';

var app = app || {};

(function (module) {

  function Recipe(rawDataObj) {
/*  CHANGE-TODO: May refactor
    Object.keys(rawDataObj).forEach(key => {
      this[key] = rawDataObj[key]
    }, this);
*/
    this.recipeName = rawDataObj.recipeName,
    this.ingredients = rawDataObj.ingredients,
    this.totalTimeInSeconds = rawDataObj.totalTimeInSeconds,
    // Need to link to site with instructions
    this.smallImageUrls = rawDataObj.smallImageUrls
  }

  Recipe.all = [];

  Recipe.prototype.toHtml = function () {
    return app.render('recipe-template', this);
  }
  
  Recipe.loadAll = (arrayOfRecipes) => {
    // TODO - CHANGE: Sort the recipes
    // Recipe.all = rows.map(recipeObj => new Recipe(recipeObj));
    arrayOfRecipes.forEach(recipeObj => Recipe.all.push(new Recipe(recipeObj)));
  }

  Recipe.fetchAll = callback => {
    $.get(`http://api.yummly.com/v1/api/recipes?_app_id=78c6217b&_app_key=
    084d45aa3306778e2ebbc3148fdaab96&q=onion+soup`).then(results => {
      console.log(results.matches);
      Recipe.loadAll(results.matches);
      callback();
    }).catch(err => console.log(err));
  }

  //TODO: Add loadOne for whatever they click on
  // Recipe.fetchAll = callback => {
  //   // TODO-CHECK: path for /api/v1/recipe
  //   $.get('http://api.yummly.com/v1/api/recipes?_app_id=78c6217b&_app_key=084d45aa3306778e2ebbc3148fdaab96&q=onion+soup')
  //     .then(results => {
  //       console.log(`something from yummly`);
  //     })

  // $.get(`${module.ENVIRONMENT.apiUrl}/api/v1/recipe`)
  //     .then(results => {
  //         console.log(`fetchAll got a response: ${results}`);
  //     })
  // };

  // TODO: Use preferences from DB to create something useable to add to url

  // Allergies: Dairy, Egg, Gluten, Peanut, Seafood, Sesame, Soy, Sulfite, Tree Nut, Wheat
  // Diets: Lacto vegetarian, Ovo vegetarian, Pescetarian, Vegan, Vegetarian


  // TODO: Create get request, adding allergy/diet preferences to url

  // TODO: Run the recipe results through the constructor function, and toHtml


//   if (/* preferences is null */) {
//     // just hit API
//   } else if (/*user has preference*/) {
//     /* concatinate 
//     &allowed + Allergy/Diet + []= + id + ^ + description 
//     and use in API call*/
//   }
// }

  module.Recipe = Recipe;
})(app);