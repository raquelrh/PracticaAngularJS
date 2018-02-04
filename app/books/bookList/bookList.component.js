(function(angular) {
  'use strict';

  angular
    .module('app.books')
    .component('bookList', bookList());

  function bookList() {
    var component = {
      templateUrl: 'app/books/bookList/bookList.component.html',
      controller: BookListController,
      bindings: {
        books: '<',
      }
    };
    return component;
  }

  BookListController.$inject = [
    '$location',
  ];

  function BookListController($location) {
    var ctrl = this;
    ctrl.viewBookDetails = viewBookDetails;

    function viewBookDetails(bookId) {
      $location.path('/books/' + bookId);
    }
  }

})(window.angular);