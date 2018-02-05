(function (angular) {
    'use strict';
  
    angular
      .module('app.authors')
      .component('authorList', authorList());
  
    function authorList() {
      var component = {
        templateUrl: '/app/authors/authorList/authorList.component.html',
        controller: AuthorListController,
        bindings: {
          authors: '<',
          filter: '<',
        }
      };
      return component;
    }
  
    AuthorListController.$inject = [
      '$location',
    ];
  
    function AuthorListController($location) {
      var ctrl = this;
      ctrl.viewAuthorDetails = viewAuthorDetails;
  
      function viewAuthorDetails(authorId) {
        $location.path('/authors/' + authorId);
      }
    }
  })(window.angular);
  