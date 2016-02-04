/**
 * Created by askuznetsov on 12/23/2015.
 */
angular.module('foodApp')
    .controller('appController', ['$scope', 'localCacheService', '$element', function ($scope, cache, $element) {
        ons.bootstrap();


        // TODO: rm: next lines for education purposes;
        cache.put('some-data', {a: 1});
        cache.put('some-data2', {b: 1, c: 100}, {
            expires: 5 * 60 * 1000,
            protected: false,
            autoClear: true
        });

        console.info(cache.get('some-data'));
        console.info(cache.get('some-data2'));
        // end of TODO


        $scope.loading = {
            showWeirdLoad: false
        };


        // TODO: move to own provider/service
        var CONFIG = {
            leftBar: {
                isOpen: false,
                //here will be list with animates, u'll setUp what u want in 'anime'
                animation: 'slide',
                //don't touch this plz
                style: {'width': '40vw'}
            },
            descriptionDirective: {
                symbolNumber: '180'
            }
        };

        $scope.CONFIG = CONFIG;
        var res = '';
        $scope.slider = function () {
                if (CONFIG.leftBar.isOpen) {
                    res = 'slideMainContent';
                } else if(res === 'slideMainContent') {
                    res = 'slideMainContentBack';
                }
            return res;
        }
    }]);
