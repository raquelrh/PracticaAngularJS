(function (angular) {
    'use strict';
  
    angular
      .module('app.authors')
      .component('authorPage', authorPage());
  
    function authorPage() {
      var component = {
        templateUrl: '/app/authors/authorPage/authorPage.component.html',
        controller: AuthorPageController
      };
      return component;
    }
  
    AuthorPageController.$inject = [
      'authorsService',
    ];
  
    function AuthorPageController(authorsService) {
      var ctrl = this;
      ctrl.onFilter = onFilter;
      ctrl.$onInit = onInit;
  
      function onFilter(filter) {
        ctrl.filter = filter;
      }
  
      function onInit() {
        //Campos para filtrar
        ctrl.fields = {
          ID: '',
          IDBook: '',
          FirstName: '',
          LastName: ''
        };

        //Listado de autores    
        authorsService.getAuthors()
          .then(function(data) {
            ctrl.authors = data;
        });
      }     
    }
  })(window.angular);
  