angular.module('hello').service('FormListService', function() { 
        var storage = {
            codes: [
                {
                    // title: '요가',
                    name: 'hi'
                },
                {
                    // title: 'gt',
                    name: 'lk'
                }
            ],

            get: function() {
                return storage.codes;
            },
            
            add: function(clientName) {
                var newForm = {
                    // title: 'dd',
                    // name: clientName
                    name : clientName,
                    // factory : clientFactory,
                    // phone : clientPhone,
                    // levels : level,
                    // belongs : belong,
                    // Titles : Title,
                    // infomas : infoma
                };
                
                storage.codes.push(newForm);
            }
        }

        return storage;
    })
