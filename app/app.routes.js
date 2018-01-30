(function (angular) {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                template: '<b> Práctica de Angular JS con API REST https://fakerestapi.azurewebsites.net/ </b>'

            })
            .otherwise('/');

        $locationProvider.html5Mode(true);
    }

})(window.angular);