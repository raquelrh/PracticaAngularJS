(function(angular) {
  'use strict';

  angular
    .module('app.books')
    .component('bookDetail', bookDetail());

  function bookDetail() {
    var component = {
      templateUrl: 'app/books/bookDetail/bookDetail.component.html',
      controller: BookDetailController
    };
    return component;
  }

  BookDetailController.$inject = [
    '$location',
    '$routeParams',
    'booksService'
  ];

  function BookDetailController($location, $routeParams, booksService) {
    var ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.viewBookList = viewBookList;

    function onInit() {
      booksService.getBook($routeParams.bookId)
        .then(function(data) {
          ctrl.book = data;
          getAuthorsBook(data.ID)
        });
    }

    function getAuthorsBook(id) {
      booksService.getAuthorsBook(id)
        .then(function (data) {
          ctrl.authors = data;
        });
      }

    function viewBookList() {
      $location.path('/books');
    }

  }

})(window.angular);