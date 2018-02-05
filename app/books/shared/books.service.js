(function(angular) {
  'use strict';

  angular
    .module('app.books')
    .factory('booksService', booksService);

  booksService.$inject = [
    '$http'
  ];

  function booksService($http) {
    var urlRoot = 'https://fakerestapi.azurewebsites.net/api/';

    var service = {
      getBooks: getBooks,
      getBook: getBook,
      postBook: postBook,
    }

    return service;

    function getBooks() {
      return $http.get(urlRoot + 'Books/')
        .then(complete)
        .catch(failed);
    }

    function getBook(bookId) {
      return $http.get(urlRoot + 'Books/' + bookId)
        .then(complete)
        .catch(failed);
    }

    function postBook(book) {
      return $http.post(urlRoot + 'Books/', book)
        .then(completePost)
        .catch(failed);
    }

    function completePost(response) {
      /*if (response.data != null && response.data.ID != null) {
        alert("Nuevo libro creado correctamente con ID: " + response.data.ID);
      }*/
      return response.data;
    }

    function complete(response) {
      return response.data;
    }

    function failed(error) {
      console.error(error.data);
    }
  }

})(window.angular);