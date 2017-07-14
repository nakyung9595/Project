angular.module('hello').service('FormListService', function() { 
        var storage = {
            codes: [
                {
                    // title: '요가',
                    Name: 'hi'
                },
                {
                    // title: 'gt',
                    Name: 'lk'
                }
            ],

            get: function() {
                return storage.codes;
            },
            
            add: function(obj) {
                // var newForm = {
                //     // title: 'dd',
                //     // name: clientName
                //     // name : clientName,
                //     // factory : clientFactory,
                //     // phone : clientPhone,
                //     // levels : level,
                //     // belongs : belong,
                //     // Titles : Title,
                //     // infomas : infoma
                // };
                
                storage.codes.push(obj);
            }
        }

        return storage;
    })
