'use strict';

page('/', () => fetchAll(), initSearchAndRecipes());

page('/about', () => initAbout());

page('/login', () => initLogIn());

page();