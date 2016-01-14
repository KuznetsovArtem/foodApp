/**
 * Created by 441N143G on 13.01.16.
 */
'use strict';

angular
    .module('foodApp')

    .factory('localizationService', function () {

        var currentLanguage = 'en_US';

        var supportLang = {

            en_US: 'english',
            ru_RU: 'russian',
            ua_UA: 'ukrainian'

        };

        var words = {

            en_US: {

                testTitle: 'food',
                testSecond: 'second'

            },

            ru_RU: {

                testTitle: 'еда',
                testSecond: 'второе'

            },

            ua_UA: {

                testTitle: 'йижа',
                testSecond: 'друге'

            }

        };

        var messages = {

            languageSetSuccess: 'now your language is ',

            badLanguage_4dev: 'sorry, choice correct language, we are support: ',

            noTranslate: 'we almost translate this :-)'

        };


        return {

            setLanguage: function (language) {

                for(var prop in supportLang){

                    if(prop === language){

                        currentLanguage = prop;

                        return '' + messages.languageSetSuccess + language;
                    }

                }

                return console.log(messages.badLanguage_4dev + JSON.stringify(supportLang));

            },

            getMessage: function (wordKey) {

                for (var prop in words[currentLanguage]) {

                    if (wordKey === prop) {

                        return words[currentLanguage][wordKey];
                    }
                }


                return messages.noTranslate;
            }

        }

    });