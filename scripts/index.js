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