angular.module('hello').service('FormListService', function() { 
        var storage = {
            codes: [
                {
                   name : 'dd'
                },
                 {
                   name : 'ss'
                },
                 {
                   name : 'qq'
                },
                 {
                   name : 'ee'
                },
                 {
                   name : 'gg'
                },
                 {
                   name : 'vv'
                },
                 {
                   name : 'nn'
                },
                 {
                   name : 'oo'
                },
                 {
                   name : 'mm'
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
