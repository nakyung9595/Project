angular.module('hello').service('FormListService', function() { 
        var storage = {
            codes: [
                {
                   title :'아아',
                   name : 'dd',
                   company: '허밍탑',
                   phone : '010-3333-2222',
                   position : '부장',
                   title : '문의엽',
                   content : '이게 뭔가용    ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄹㄴㅇㄹㄴㅇㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㅇㄹㅇㄹㅇㄹㄹㅇㄹㄴㅇㄹㅇㄹㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄹㅇㄹ',
                   division : '앵귤'
                },
                 {
                     title :'가가',
                   name : 'aa',
                   content : 'dd'
                },
                 {
                     title :'라라',
                   name : 'cc'
                },
                 {
                     title :'다다',
                   name : 'ee'
                },
                 {
                     title :'나나',
                   name : 'bb'
                },
                 {
                     title :'마마',
                   name : 'ff'
                },
                 {
                     title :'자자',
                   name : 'gg'
                },
                 {
                     title :'사사',
                   name : 'ii'
                },
                 {
                     title :'바바',
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
