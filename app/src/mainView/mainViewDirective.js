/**
 * Created by 441N143G on 19.01.16.
 */
'use strict';

angular

    .module('foodApp')

    .directive('mainView', [function () {
        return {
            templateUrl: '/src/mainView/mainView.html',
            scope: {},
            controller: 'mainViewController',
            controllerAs: 'vm'
        }
    }])

    .controller('mainViewController', ['userSessionStorage', 'foodService', '$scope', function (userServe, foodServe, $scope) {

        var vm = this;

        vm.foodName = foodServe.getFood().name;

        vm.howMake = function () {
            console.log('order');
        };
        vm.random = function () {
            console.log('random');
        };


//TODO next few line just 4 my dev. burn, burn with angry after.
        vm.whereBuy = function () {

            if (userServe.getUser().lang === 'ru') {

                userServe.setLang('en');

            } else {

                userServe.setLang('ru');

            }
        };

        $scope.$watch(userServe.getUser, function () {
            vm.foodName = foodServe.getFood().name;
        }, true);

    }]);