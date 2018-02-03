(function (angular) {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: '<b> Práctica de Angular JS con API REST <a href="https://fakerestapi.azurewebsites.net/">Fakerestapi</a> </b>'
            })
            .when('/books', {
                template: '<book></book>'
            })          
            .when('/authors', {
                template: '<author></author>'
            })    
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }

})(window.angular);