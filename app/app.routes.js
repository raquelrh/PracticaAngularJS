(function(angular) {
  'use strict';

  angular
    .module('app')
    .config(config);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        template: '<b> Práctica de Angular JS con API REST <a href="https://fakerestapi.azurewebsites.net/">Fakerestapi</a> </b>'
      })
      .when('/books', {
        template: '<book-page></book-page>'
      })
      .when('/books/:bookId', {
        template: '<book-detail></book-detail>'
      })
      .when('/books/create', {
        template: '<book-create></book-create>'
      })
      .when('/authors', {
        template: '<author-page></author-page>'
      })
      .when('/authors/:authorId', {
        template: '<author-detail></author-detail>'
      })
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }

})(window.angular);