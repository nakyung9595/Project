angular.
    module('hello', ['ngMaterial', 'ngMessages'])

/**
 * Main App Controller for the Angular Material Starter App
 * @param FormDataService
 * @param $mdToast
 * @constructor
 */
function FormController(FormDataService, $mdToast) {
    var self = this;
    self.onclick = onclick;
 

    self.project = {
    description: 'Nuclear Missile Defense System',
    rate: 500,
    special: true
  };
  
  function onclick(){
    $mdToast.show($mdToast.simple().textContent('Hello!'));
};
}


export default [ 'FormDataService', '$mdToast', FormController ];