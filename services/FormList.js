angular.module('hello').service('FormListService', function() { 
        var storage = {
            codes: [
                {
                   name : 'dd'
                },
                 {
                   name : 'aa'
                },
                 {
                   name : 'cc'
                },
                 {
                   name : 'ee'
                },
                 {
                   name : 'bb'
                },
                 {
                   name : 'ff'
                },
                 {
                   name : 'gg'
                },
                 {
                   name : 'ii'
                },
                 {
                   name : 'hh'
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
