//'use strict';

angular.module('hello')
  .component('about', {
  templateUrl:  '/components/write.html',
    controller: function($scope, $mdToast, $state, FormListService) {
      //$scope.clientName = 'aaa';
      
      $scope.project = {
        description: 'Nuclear Missile Defense System',
        rate: 500,
        special: true
      };

     
      
      $scope.onclick = function onclick(){       
        console.log('scope:', $scope);
          FormListService.add($scope.projectForm);
          //$scope.clientName = "";
        
        //$mdToast.show($mdToast.simple().textContent('문의가 완료되었습니다!'));
        //$location.path('/components/list.html');
<<<<<<< HEAD
        //$state.transitionTo("list");
=======
       
        $state.transitionTo("list");
>>>>>>> 5573a830e37ac66de5d2463473cdbe69e30d6f76
      };
    }
  }
)
