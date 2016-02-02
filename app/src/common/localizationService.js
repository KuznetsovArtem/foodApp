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
              'foodApp.description.readMore' : 'Больше информации',
              'foodApp.description.readLess' : 'Меньше информации',
              'foodApp.startPage.goToMainButton':'На главную',
              'foodApp.leftBar.filters': 'фильтры',
              'foodApp.leftBar.favorites': 'избранное',
              'foodApp.leftBar.last': 'последние'

          },
          'en' : {
              'foodApp.main.header' : 'Text on header',
              'foodApp.description.readMore' : 'read more',
              'foodApp.description.readLess' : 'read less',
              'foodApp.startPage.goToMainButton':'go 2 main',
              'foodApp.leftBar.filters': 'filters',
              'foodApp.leftBar.favorites': 'favorites',
              'foodApp.leftBar.last': 'last'

          }
        };
        return {
            getMessages: function(lang) {
                return messages[lang]||console.warn('foodApp.modules.common.services.localization::', 'No msgs DB for selected lang');
            }
        }
    }]);