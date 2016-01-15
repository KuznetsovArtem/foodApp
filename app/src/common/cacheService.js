/**
 * Created by askuznetsov on 1/14/2016.
 */

angular.module('foodApp.modules.common.services.cache', [])

    .factory('cacheService', ['$cacheFactory', function($cacheFactory) {
        // TODO: cache map, setter, clear time, so on
        return {
            get : function(cacheKey) {
                return $cacheFactory(cacheKey);
            },
            put : function(key, value) {
                var cached = $cacheFactory(key);
                cached.put(key, value);
                return value;
            }
        }
    }])
    // TODO: storages, cache - browser, file, cookie;
