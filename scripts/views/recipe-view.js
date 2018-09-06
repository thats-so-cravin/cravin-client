'use strict';
var app = app || {};

(function (module) {

  let recipeView = {};

  recipeView.initIndexPage = () => {
    console.log('in recipe view')
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
      $.get(`https://api.yummly.com/v1/api/recipe/${id}?_app_id=9f58e968&_app_key=c36e4936121a7c9b5dd41fae93bc0e8b`, data => {
        window.open(data.source.sourceRecipeUrl, '_blank')
      })
    }
  };

  module.recipeView = recipeView;
})(app);