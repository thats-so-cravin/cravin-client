'use strict';

var app = app || {};

(function (module) {

  let productionApiUrl = 'https://thats-so-cravin.herokuapp.com/';
  let developmentApiUrl = 'http://localhost:3000';

  // DONE-TODO: Create property called isProduction which will evaluate environment based on browser URL. Use it to set your app.ENVIRONMENT.apiUrl

  module.ENV = {
    apiUrl: module.isProduction ? productionApiUrl : developmentApiUrl
  };


  // DONE-TODO: Create a .showOnly method to reveal the containers of your single-page app.
  module.showOnly = (selector) => {
    $('.container').hide();
    $(selector).show();
  }


  // TODO: Create a .render method to compile your Handlebars template.
  module.render = (templateId, data) => {
    // module.
  }

  // DONE-TODO: Enclose your code in an IIFE.
})(app);