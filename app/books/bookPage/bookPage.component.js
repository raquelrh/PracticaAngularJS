(function(angular) {
  'use strict';

  angular
    .module('app.books')
    .component('bookPage', bookPage());

  function bookPage() {
    var component = {
      templateUrl: '/app/books/bookPage/bookPage.component.html',
      controller: BookPageController
    };
    return component;
  }

  BookPageController.$inject = [
    'booksService',
  ];

  function BookPageController(booksService) {
    var ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {
      booksService.getBooks()
        .then(function(data) {
          ctrl.books = data;
        });
    }

  }

})(window.angular);