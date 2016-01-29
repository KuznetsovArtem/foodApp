/**
 * Created by askuznetsov on 1/14/2016.
 * TODO: only skeleton for testing; refactor needs;
 */

angular.module('foodApp.modules.common.services.localCache', [])

    .factory('localCacheService', [function() {
        // TODO: cache map, setter, clear time, so on
        return {
            get : function(cacheKey) {
                return cacheKey;
            },
            put : function(key, value) {
                return key;
            }
        }
    }]);
// TODO: storages, cache - browser, file, cookie;
