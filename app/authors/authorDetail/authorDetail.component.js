(function (angular) {
    'use strict';
  
    angular
      .module('app.authors')
      .component('authorDetail', authorDetail());
  
    function authorDetail() {
      var component = {
        templateUrl: '/app/authors/authorDetail/authorDetail.component.html',
        controller: AuthorDetailController
      };
      return component;
    }
  
    AuthorDetailController.$inject = [
      '$routeParams',
      'authorsService'
    ];
  
    function AuthorDetailController($routeParams, authorsService) {
      var ctrl = this;
      ctrl.$onInit = onInit;
  
      function onInit() {
        authorsService.getAuthor($routeParams.id)
          .then(function (data) {
            ctrl.author = data;
            getAuthorBook(data.id)
          });
      }
  
      // function getAuthorBook(id) {
      //   authorsService.getAuthorBook(id)
      //     .then(function (data) {
      //       ctrl.book = data;
      //     });
      //}
    }
  })(window.angular);
  