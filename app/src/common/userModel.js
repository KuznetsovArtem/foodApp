/**
 * Created by askuznetsov on 1/15/2016.
 */


angular.module('foodApp.modules.user', [])

    .factory('userModel', ['$q', 'cacheService', function($q, cacheService) {

        // TODO: remove this after getting real data;
        var mockedUserData = {
            name: 'Test',
            lang : 'ru'
        };

        //cacheService.put('user', mockedUserData);
        //var userData = cacheService.get('user');

        return {
            getUser : function() {
                return mockedUserData;
            }
        }
    }]);
