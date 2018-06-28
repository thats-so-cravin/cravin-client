'use strict';

// function initSearchAndRecipes() {
//   // showSearchAndRecipes();
//   // app.recipeView.initIndexPage();
//   console.log('initSearchAndRecipes is working!');
// }

// initSearchAndRecipes();

function showSearchAndRecipes() {
  app.viewResetter();
  $('.recipe-search-view').show();
}

//Listener for search button
$('#search-button').on('click', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  let searchData = {};
  searchData.first_ing = $('#first-ing').val();
  searchData.second_ing = $('#second-ing').val();
  searchData.third_ing = $('#third-ing').val();
  searchData.fourth_ing = $('#fourth-ing').val();
  let searchStr = `&q=${searchData.first_ing}+${searchData.second_ing}+${searchData.third_ing}+${searchData.fourth_ing}`;
  console.log(`search str`, searchStr)
  $.get(`http://api.yummly.com/v1/api/recipes?_app_id=78c6217b&_app_key=084d45aa3306778e2ebbc3148fdaab96${searchStr}`, data => {console.log(data)})

  // DONE: Call fetchAll and pass it searchStr, modify fetchAll to accept argument of searchStr
  app.Recipe.fetchAll(app.Recipe.loadAll, searchStr);
}