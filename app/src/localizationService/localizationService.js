/**
 * Created by 441N143G on 13.01.16.
 */
'use strict';

angular
    .module('foodApp')

    .factory('localizationService', function () {

        var supportLang = {

            en_US: 'english',
            ru_RU: 'russian',
            ua_UA: 'ukrainian'

        };

        var words = {

            en_US: {

                testTitle: 'food'

            },

            ru_RU: {

                testTitle: 'еда'

            },

            ua_UA: {

                testTitle: 'йижа'

            }

        };

        var messages = {

            badLanguage_4dev: 'sorry, choice correct language, we are support: ',

            noTranslate: 'we almost translate this :-)'

        };


        return {

            getWords: function (language) {

                for (var prop in words) {

                    if (language === prop) {

                        return words[prop];
                    }
                }


                return console.log(messages.badLanguage_4dev + JSON.stringify(supportLang));
            }

        }

    });