angular.module('hello',['ngMaterial'])
  .component('form', {
  templateUrl:  'components/Form.html',

    controller: function($mdToast) {
      var self = this;
      self.onclick = onclick;

      self.project = {
         description: 'Nuclear Missile Defense System',
          rate: 500,
          special: true
      };

    this.onclick() = function() {
      $mdToast.show($mdToast.simple().textContent('문의가 완료되었습니다!'));
    };
  }
})