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
    '$routeParams',
    'booksService'
  ];

  function BookDetailController($routeParams, booksService) {
    var ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {
      //alert("BookDetailController.onInit " + JSON.stringify($routeParams));
      booksService.getBook($routeParams.bookId)
        .then(function(data) {
          ctrl.book = data;
        });
    }

  }

})(window.angular);