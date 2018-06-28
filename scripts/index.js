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

  $('.srch').on('click', function (e) {
    e.preventDefault();
    $('.container').hide();
    $('#srch').show();
    // $('.recipe-view').show();
  })
  // TODO: review the code below for keeping the search form while recipe is shown
  // $('#search').on('click',function(e){
  //   e.preventDefault();
  //   $('.container').hide();
  //   $('.recipe-view').show();
  //   $('#srch').show();
  // })

  // DONE-TODO: Create a .showOnly method to reveal the containers of your single-page app.
  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  };

  // DONE-TODO: Create a .render method to compile your Handlebars template.
  module.render = (templateId, data) => {
    let recipeTemplate = Handlebars.compile($(`#${templateId}`).text());
    return recipeTemplate(data);
  };

  // DONE-TODO: Enclose your code in an IIFE.
})(app);