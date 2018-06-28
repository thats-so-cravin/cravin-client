'use strict';

var app = app || {};

(function (module) {

  User.current = {};

  function User(rawUserData) {
    this.userId = rawUserData.user_id,
    this.username = rawUserData.username,
    this.password = rawUserData.password,
    this.allowedAllergy = rawUserData.allowed_allergy,
    this.allowedDiet = rawUserData.allowed_diet
  }

  module.User = User;
})(app);