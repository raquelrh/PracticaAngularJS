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
      booksService.getBook($routeParams.id)
        .then(function(data) {
          ctrl.book = data;
        });
    }

  }

})(window.angular);