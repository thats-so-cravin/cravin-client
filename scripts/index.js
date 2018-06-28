'use strict';

var app = app || {};

(function (module) {

  let productionApiUrl = 'https://thats-so-cravin.herokuapp.com';
  module.yummlyApiUrl = 'http://api.yummly.com/v1';
  let developmentApiUrl = 'http://localhost:3000';
  module.isProduction = /^(?!localhost|127)/.test(window.location.hostname);

  // DONE-TODO: Create property called isProduction which will evaluate environment based on browser URL. Use it to set your app.ENVIRONMENT.apiUrl

  module.ENVIRONMENT = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };
  //TODO: hide/show nave menu
  // https://codepen.io/RedJokingInn/pen/eGQzYZ

  // TODO: review the code below for keeping the search form while recipe is shown
  function viewResetter () {
    $('.container').hide();
  }

  // CHANGE-TODO: These may need to be commented back in
  $('.log-in').on('click', function (e) {
    e.preventDefault();
    $('.container').hide();
    $('#log-in').show();
  })

  $('.abt').on('click', function (e) {
    e.preventDefault();
    $('.container').hide();
    $('#abt').show();
  })

  $('.nav-search').on('click', function (e) {
    e.preventDefault();
    $('.container').hide();
    $('.recipe-search-view').show();
    // $('.recipe-view').show();
  })
  // TODO: review the code below for keeping the search form while recipe is shown
  $('#search-button').on('click',function(e){
    e.preventDefault();
    $('.container').hide();
    $('.recipe-search-view').show();
    // $('#srch').show();
  })

  // DONE-TODO: Create a .showOnly method to reveal the containers of your single-page app.
  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  };

  // // CHANGE-TODO: This is temporary:
  // $('.container').hide();
  // $('.search-view').show();
  // $('.recipe-view').show();

  // DONE-TODO: Create a .render method to compile your Handlebars template.
  module.render = (templateId, data) => {
    let recipeTemplate = Handlebars.compile($(`#${templateId}`).text());
    return recipeTemplate(data);
  };

  // DONE-TODO: Enclose your code in an IIFE.
})(app);