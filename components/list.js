'use strict';

angular.module('hello')
  .component('list', {
  templateUrl:  '/components/list.html',
   controller: function($scope, FormListService) {
      $scope.codes = FormListService.get();      
    }
  }
)
