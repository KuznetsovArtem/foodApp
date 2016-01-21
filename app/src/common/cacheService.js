/**
 * Created by askuznetsov on 1/14/2016.
 */

angular.module('foodApp.modules.common.services.cache', [])

    // TODO: storages, cache - browser, file, cookie;
    .factory('userSessionStorage', [function () {

        // FIXME: Just placeholder for localization testing
        var user = {
            name: 'Test',
            lang: 'ru'
        };

        return {

            getUser: function () {
                return user;
            },

            setLang: function (lang) {

                user.lang = lang;

            }
        }

    }]);
