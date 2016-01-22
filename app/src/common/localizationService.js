/**
 * Created by askuznetsov on 1/14/2016.
 */

'use strict';

angular.module('foodApp.modules.common.services.localization', [])
    .provider('localizationConfig', function () {
        var config = { lang: 'en' };
        return {
            init: function (configuration) {
                config = configuration;
            },
            $get: function () {
                return config;
            }
        }
    })
    .factory('localizationService', ['localizationConfig', 'localizationMessages',
        function(localizationConfig, localizationMessages) {
        var currentLang = localizationConfig.lang;
        var noMsgPrefix = localizationConfig.prefix||'NO_LANG';

        return {
            setLang: function(lang) {
                // TODO: check in lang array;
                currentLang = lang||localizationConfig.lang;
            },
            getMessage: function(msg) {
                return localizationMessages.getMessages(currentLang)[msg]||[noMsgPrefix, currentLang, msg].join('::');
            }
        }
    }])

    // TODO: temp placeholder, move messages to JSON file.
    .factory('localizationMessages', [function() {

        var messages = {
          'ru' : {
              'foodApp.main.header' : 'Текст на хидере',
              'foodApp.description.readMore' : 'read more'
          },
          'en' : {
              'foodApp.main.header' : 'Text on header',
              'foodApp.description.readMore' : 'Больше информации'
          }
        };
        return {
            getMessages: function(lang) {
                return messages[lang]||console.warn('foodApp.modules.common.services.localization::', 'No msgs DB for selected lang');
            }
        }
    }]);