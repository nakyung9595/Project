var myApp = angular.module('hello', ['md.data.table', 'ui.mask','ui.router', 'ngMaterial', 'ngMessages']);

myApp.config(function($stateProvider) {
  // An array of state definitions

  var states = [
    { name: 'hello', url: '/hello', component: 'hello' },
    { name: 'about', url: '/about', component: 'about' },
    { name: 'list', url: '/list', component: 'list' },
    { name: 'detail', url: '/detail', component: 'detail' },
    
    { 
      name: 'people', 
      url: '/people', 
      component: 'people',
      resolve: {
        people: function(PeopleService) {
          return PeopleService.getAllPeople();
        }
      }
    },
    
    { 
      name: 'people.person', 
      url: '/{personId}', 
      component: 'person',
      resolve: {
        person: function(people, $stateParams) {
          return people.find(function(person) { 
            return person.id === $stateParams.personId;
          });
        }
      }
    }
  ]
  
  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
});


