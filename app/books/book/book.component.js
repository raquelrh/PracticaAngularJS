(function(angular) {
  'use strict';

  angular
    .module('app.books')
    .component('book', book());

  function book() {
    var component = {
      templateUrl: 'app/books/book/book.component.html',
      controller: BookController,
      bindings: {
        book: '<',
      }
    };
    return component;
  }

  BookController.$inject = [
    '$location',
  ];

  function BookController($location) {
    var ctrl = this;
    ctrl.$onInit = onInit;

    function onInit() {
      //alert("BookController.onInit.location=" + $location);
    }
  }
})(window.angular);