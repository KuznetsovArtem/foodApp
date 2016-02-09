/**
 * Created by 441N143G on 17.01.16.
 */
'use strict';

angular
    // TODO: module : foodApp.modules.food.directives.foodDescription
    // + TODO: save folder structure;
    .module('foodApp')
    .directive('foodDescription', [function () {
        return {
            templateUrl: '/src/foodDescription/foodDescription.html',
            scope:{
                config: '=?',
                fullDescription: '=?description'
            },
            link: function (scope) {
                var defConfig = {
                    shortDescriptionLength: 190,
                    shortDescriptionEnd: '...'
                };

                var CONFIG = angular.merge({}, defConfig, scope.config);

                // TODO: move to food model;
                scope.shortDescription = [
                    scope.fullDescription.slice(0, CONFIG.shortDescriptionLength)
                        .split(' ').slice(0, -1).join(' '),
                    CONFIG.shortDescriptionEnd
                ].join('');
                // TODO: no 'read more' if text length < conf text length
            }
        }
    }]);