(function (angular) {
    'use strict';
  
    angular
      .module('app.authors')
      .component('authorDetail', authorDetail());
  
    function authorDetail() {
      var component = {
        templateUrl: 'app/authors/authorDetail/authorDetail.component.html',
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
        // alert("AuthorDetailController.onInit " + JSON.stringify($routeParams));
        authorsService.getAuthor($routeParams.authorId)
          .then(function (data) {
            ctrl.author = data;
          });
      }
  
    }
  })(window.angular);
  