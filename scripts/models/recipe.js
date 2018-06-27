'use strict';

var app = app || {};

(function (module) {

  function Recipe(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => {
      this[key] = rawDataObj[key]
    }, this);
  }

  Recipe.all = [];

  Recipe.prototype.toHtml = function () {
    return app.render('recipe-template', this);
  }

  Recipe.loadAll = rows => {
    // TODO - CHANGE: Sort the recipes
    Recipe.all = rows.map(recipeObj => new Recipe(recipeObj));
  }

  //TODO: Add loadOne for whatever they click on 
  Recipe.fetchAll = callback => {
    // TODO-CHECK: path for /api/v1/recipe
    $.get('http://api.yummly.com/v1/api/recipes?_app_id=78c6217b&_app_key=084d45aa3306778e2ebbc3148fdaab96&q=onion+soup')
      .then(results => {
        console.log(`something from yummly`);
      })

    // $.get(`${module.ENVIRONMENT.apiUrl}/api/v1/recipe`)
    //     .then(results => {
    //         console.log(`fetchAll got a response: ${results}`);
    //     })
  };


  module.Recipe = Recipe;
})(app);