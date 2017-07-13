angular.module('hello').component('detail', {
  templateUrl:  '/components/detail.html',
  
  controller: function($scope, FormListService) {
      $scope.codes = FormListService.get();      
    }
});