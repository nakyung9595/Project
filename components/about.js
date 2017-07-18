//'use strict';

angular.module('hello')
  .component('about', {
  templateUrl:  '/components/write.html',
    controller: function($scope, $mdToast, $state, FormListService) {
      //$scope.clientName = 'aaa';

      $scope.onclick = function onclick(form){
        console.log('scope:', $scope);
        console.log('form:', form);
        FormListService.add($scope.qna);
          //$scope.clientName = "";

        //$mdToast.show($mdToast.simple().textContent('문의가 완료되었습니다!'));
        //$location.path('/components/list.html');
        $state.transitionTo("list");
      };
    }
  }
)
