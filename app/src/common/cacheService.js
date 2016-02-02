/**
 * Created by askuznetsov on 1/14/2016.
 * TODO: only skeleton for testing; refactor needs;
 */

angular.module('foodApp.modules.common.services.localCache', [])
    .provider('localCacheConfig', function () {
        var config = {
            prefix: 'app',
            expTime: 0
            // TODO: ls\ss select
        };
        // TODO: inherit from global config provider, ro avoid copy/paste;
        return {
            init: function (configuration) {
                config = configuration;
            },
            $get: function () {
                return config;
            }
        }
    })
    .factory('localCacheService', ['$window', 'localCacheConfig', function($window, CONFIG) {
        // TODO: cache map, setter, clear time, so on
        function makeKey(key) {
            return [
                CONFIG.prefix,
                key
            ].join('.');
        }
        function prepareData(value, options) {
            /*
                TODO: in options:
                    override app prefix,
                    expire time,
                    size,
                    priority
             */
            var rawData = {};
            if(typeof options === "object") {
                rawData = options;
            }

            rawData.data = value;
            rawData.created = new Date();

            return JSON.stringify(rawData);
        }
        function fetchData(key) {
            var rawData = $window.localStorage.getItem(makeKey(key));
            if(!rawData) {
                return false;
            }
            return JSON.parse(rawData).data;
        }
        return {
            get : function(cacheKey) {
                return fetchData(cacheKey);
            },
            put : function(key, value, options) {
                $window.localStorage.setItem(
                    makeKey(key),
                    prepareData(value, options)
                );
                return value;
            }
        }
    }]);
// TODO: storages, cache - browser, file, cookie;
