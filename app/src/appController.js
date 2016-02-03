/**
 * Created by askuznetsov on 12/23/2015.
 */
angular.module('foodApp')
    .controller('appController', ['$scope', 'localCacheService', function ($scope, cache) {
        ons.bootstrap();


        // TODO: rm: next lines for education purposes;
        cache.put('some-data', {a:1});
        cache.put('some-data2', {b:1, c: 100}, {
            expires: 5 * 60 * 1000,
            protected: false,
            autoClear: true
        });

        console.info(cache.get('some-data'));
        console.info(cache.get('some-data2'));
        // end of TODO


        $scope.loading = {
            showWeirdLoad : false
        };


        // TODO: move to own provider/service
        var CONFIG = {
            leftBar : {
                //here will be list with animates, u'll setUp what u whant in 'anime'
                animation: 'slide',
                style: {'width': '150px'}
            },
            descriptionDirective : {
                symbolNumber: '180'
            }
        };

        $scope.CONFIG = CONFIG;
    }]);
