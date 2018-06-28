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

    // Listener for Recipe Details link
    $('a').on('click', handleRecipe);
    function handleRecipe(event) {
      console.log('in handleRecipe')
      event.preventDefault();
      let id = this.name;
      console.log(this.name)
      $.get(`http://api.yummly.com/v1/api/recipe/${id}?_app_id=78c6217b&_app_key=084d45aa3306778e2ebbc3148fdaab96`, data => {
        window.open(data.source.sourceRecipeUrl, '_blank')
      })
    }
  };

  module.recipeView = recipeView;
})(app);