/**
 * Created by askuznetsov on 12/21/2015.
 */

angular

    .module('foodApp')

    //TODO fix this. create 4 dev
    .factory('foodService', ['userSessionStorage', function (userServe) {

        var currentFood = {

            "name": {

                'ru': 'пицца',
                'en': 'pizza'

            },

            "description": {

                'ru': 'пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо пиццаХорошо',
                'en': 'pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood  pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood pizzaGood'

            }

        };

        //var localizationFood = function (lang) {
        //
        //    var result = {};
        //
        //    for (var key in currentFood) {
        //
        //        if (currentFood[key][lang]) {
        //
        //            result[key] = currentFood[key][lang];
        //
        //        }
        //
        //    }
        //
        //    return result;
        //
        //}(userServe.getUser().lang);

         var localizationFood = function (lang) {

            var result = {};

            for (var key in currentFood) {

                if (currentFood[key][lang]) {

                    result[key] = currentFood[key][lang];

                }

            }

            return result;

        };

        return {

            getFood: function () {

                return localizationFood(userServe.getUser().lang);

            }

        }

    }]);