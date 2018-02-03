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
      getBook: getBook,
      getBooks: getBooks,
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

    function complete(response) {
      return response.data;
    }

    function failed(error) {
      console.error(error.data);
    }
  }

})(window.angular);