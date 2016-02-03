/**
 * Created by askuznetsov on 12/23/2015.
 */
angular.module('foodApp')
    .controller('appController', ['$scope', 'localCacheService', function ($scope, cashe) {
        ons.bootstrap();


        // TODO: rm: next lines for education purposes;
        cashe.put('some-data', {a:1});
        cashe.put('some-data2', {b:1, c: 100}, {
            expires: 5 * 60 * 1000,
            protected: false,
            autoClear: true
        });

        console.info(cashe.get('some-data'));
        console.info(cashe.get('some-data2'));
        // end of TODO

        //configs
        $scope.configLeftBar = {
            isOpen:false,
            //here will be list with animates, u'll setUp what u whant in 'anime'
            anime: 'slide',
            style: {width: '150px',
            push:{
                // 4 anime.slide must be like style.width
                'left':'150px'
            }}

        };

        $scope.configDescription = {
          symbolNumber: '180'
        }
    }]);
