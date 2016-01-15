/**
 * Created by askuznetsov on 1/14/2016.
 */

angular.module('foodApp.modules.common.services.cache', [])

    // TODO: storages, cache - browser, file, cookie;
    .factory('userSessionStorage', [function() {

        // FIXME: Just placeholder for localization testing
        return {
            getUser : function() {
                return {
                    name: 'Test',
                    lang : 'ru'
                }
            }
        }

    }]);
