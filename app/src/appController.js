/**
 * Created by askuznetsov on 12/23/2015.
 */
angular.module('foodApp')
    .controller('appController', [
        '$scope',
        'localCacheService',
        'ROUTES',
        function ($scope, cache, ROUTES) {
        //ons.bootstrap();
        $scope.urls = ROUTES;

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

        // Mocked food // TODO: get from model
        $scope.foodItem = {
            name: 'Some food',
            description: 'Some very long description specially for \'testing purposes... 12345 , \' \' bla-bla 12345 "test" ,and ones more: Some very long description specially for \'testing purposes... , \' \' bla-bla 12345 "test" '
        };


        // TODO: move to own provider/service
        var CONFIG = {
            leftBar: {
                isOpen: false,
                //here will be list with animates, u'll setUp what u want in 'anime'
                animation: {
                    in: 'slideContent',
                    out: 'slideContentBack'
                },
                //don't touch this plz
                style: {'width': '40vw'}
            },
            descriptionDirective: {
                shortDescriptionLength: '180'
            }
        };

        $scope.CONFIG = CONFIG;

        $scope.leftBarSlider = '';

    }]);
