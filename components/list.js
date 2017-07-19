'use strict';

angular.module('hello')
  .component('list', {
  templateUrl:  '/components/list.html',
   controller: function($scope, FormListService) {
      $scope.codes = FormListService.get();   

      $scope.condition = {
        limit: 5,
        page: 1,
      };

      $scope.options = {
        //autoSelect: true,
        boundaryLinks: true,
        //largeEditDialog: true,
        pageSelector: true,
        rowSelection: true
      };

      $scope.limitOptions = [5, 10, 15]; 
      
    }
  }
)
