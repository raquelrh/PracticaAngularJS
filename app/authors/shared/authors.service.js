(function (angular) {
    'use strict'

    angular
        .module('app.authors')
        .factory('authorsService', authorsService);

    authorsService.$inject = ['$http'];

    function authorsService($http) {
        var urlRoot = "https://fakerestapi.azurewebsites.net/api/";
        
        var service = {
            getAuthor: getAuthor,
            getAuthors: getAuthors,
            getBooksAuthor: getBooksAuthor,
        };

        return service;

        function getAuthors() {
            return $http.get(urlRoot + 'Authors/')
                .then(complete)
                .catch(failed);
        }

        function getAuthor(authorId) {
            return $http.get(urlRoot + 'Authors/' + authorId)
                .then(complete)
                .catch(failed);
        }

        function getBooksAuthor(bookId) {
            return $http.get(urlRoot + 'Books/')
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