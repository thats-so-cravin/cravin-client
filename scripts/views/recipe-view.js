'use strict';
var app = app || {};

(function (module) {

  let recipeView = {};

  recipeView.initIndexPage = () => {
    console.log('in recipe view')
    // app.showOnly('.recipe-view');
    $('#recipe-count').html(`<p>Total Recipes: ${app.Recipe.all.length} </p>`);
    $('#recipe-list').html('');
    app.Recipe.all.map(a => $('#recipe-list').append(a.toHtml()));
  };

  module.recipeView = recipeView;
})(app);