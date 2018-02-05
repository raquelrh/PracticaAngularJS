(function(angular) {
  'use strict';

  angular
    .module('app.books')
    .component('bookCreate', bookCreate());

  function bookCreate() {
    var component = {
      templateUrl: 'app/books/bookCreate/bookCreate.component.html',
      controller: BookCreateController,
    };
    return component;
  }

  BookCreateController.$inject = [
    '$location',
    'booksService'
  ];

  function BookCreateController($location, booksService) {
    var ctrl = this;
    ctrl.$onInit = onInit;
    ctrl.submit = submit;
    ctrl.viewBookList = viewBookList;

    function onInit() {
      ctrl.book.ID = '';
      ctrl.book.Title = 'Nuevo Título';
      ctrl.book.PageCount = 0;
      ctrl.book.PublishDate = new Date();
      ctrl.book.Description = 'Nueva descripción';
      ctrl.book.Excerpt = 'Nuevo extracto';
    }

    function submit(book) {
      booksService.postBook(book)
        .then(completed);

      function completed(response) {
        if (response != null && response.ID != null) {
          alert("Nuevo libro creado correctamente con ID: " + response.ID);
          book.ID = response.ID;
        } else {
          alert("Hubo un error en la creación del libro: " + JSON.stringify(response));
        }
      }
    }

    function viewBookList() {
      $location.path('/books');
    }

  }
})(window.angular);