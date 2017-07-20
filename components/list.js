'use strict';

angular.module('hello')
  .component('list', {
  templateUrl:  '/components/list.html',
   controller: function($scope, $q, FormListService) {
    //  var deferred = $q.defer();
    //  $scope.promise = deferred.promise;

      $scope.codes = FormListService.get();   
      $scope.currentPage = 1;
      $scope.condition = {
        limit: 5,
        page: 1,
      };

      $scope.options = {
        // autoSelect: true,
        boundaryLinks: true,
        //largeEditDialog: true,
        pageSelector: true,
      };

      $scope.selected = [ ];
      
    }
  }
)
