/**
 * Created by 441N143G on 19.01.16.
 */
'use strict';

angular

    .module('foodApp')

    .directive('leftBar', [function () {
        return {
            templateUrl: '/src/leftBar/leftBar.html',
            scope: {},
            controller: 'leftBarController',
            controllerAs: 'vm'
        }
    }])

    .controller('leftBarController', ['$timeout', function ($timeout) {

        var config = {

            anime: {

                open: 'openAnime',
                close: 'closeAnime',
                time: '290'
            },

            style:{ 'width': '50vw'}

        };

        var vm = this;

        vm.isOpen = false;

        vm.class = config.anime.open;
        vm.style = config.style;

        vm.openMe = function () {

            if (vm.isOpen === true) {

                vm.class = config.anime.close;

                $timeout(function () {

                    vm.isOpen = !vm.isOpen;

                }, config.anime.time);

            }else{

                vm.isOpen = !vm.isOpen;
                vm.class = config.anime.open;

            }

        };

    }]);