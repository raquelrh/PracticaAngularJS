(function (angular) {
  'use strict';

  angular
    .module('app.core')
    .component('filter', filter());

  function filter() {
    var component = {
      templateUrl: 'app/core/filter/filter.component.html',
      controller: FilterController,
      bindings: {
        filter: '<',
        onFilter: '&'
      }
    };
    return component;
  }

  function FilterController() { }
})(window.angular);
