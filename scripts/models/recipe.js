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
    this.smallImageUrls = rawDataObj.smallImageUrls,
    this.id = rawDataObj.id
  }

  Recipe.all = [];

  Recipe.prototype.toHtml = function () {
    return app.render('recipe-template', this);
  }

  Recipe.loadAll = (arrayOfRecipes) => {
    // TODO - CHANGE: Sort the recipes
    // Recipe.all = rows.map(recipeObj => new Recipe(recipeObj));
    console.log('in loadAll')
    app.Recipe.all = [];
    arrayOfRecipes.forEach(recipeObj => Recipe.all.push(new Recipe(recipeObj)));
    app.recipeView.initIndexPage();
  }

  // CHANGE-TODO: Need to comment back in callback and searchStr on line 34, dynamic search on line 41, callback(results.matches) on line 47
  // comment out Recipe.loadAll on line 46
  Recipe.fetchAll = (callback, searchStr) => {
    // hardcoded search
    //     $.get(`http://api.yummly.com/v1/api/recipes?_app_id=78c6217b&_app_key=
    // 084d45aa3306778e2ebbc3148fdaab96&q=onion+soup`)

    // dynamic search
    $.get(`http://api.yummly.com/v1/api/recipes?_app_id=78c6217b&_app_key=084d45aa3306778e2ebbc3148fdaab96${searchStr}`, data => { console.log(data) })
      .then(results => {
        console.log(results.matches);
        // Recipe.loadAll(results.matches);
        callback(results.matches);
      })
      // .then($.get(`http://api.yummly.com/v1/api/recipe/${id}?_app_id=78c6217b&_app_key=084d45aa3306778e2ebbc3148fdaab96`, data => { console.log(data) }));
    // .catch(err => console.log(err));
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

  module.Recipe = Recipe;
})(app);