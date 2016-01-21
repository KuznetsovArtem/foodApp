/**
 * Created by 441N143G on 17.01.16.
 */
'use strict';

angular

    .module('foodApp')

    .directive('foodDescription', [function () {
        return {
            templateUrl: '/src/foodDescription/foodDescription.html',
            scope: {},
            controller: 'foodDescriptionController',
            controllerAs: 'vm'
        }
    }])

    .controller('foodDescriptionController', ['userSessionStorage', 'foodService', '$scope', function (userServe, foodServe, $scope) {


        var vm = this;
        var symbolNumberConf = 160; //TODO make config

        vm.descriptionContainer = foodServe.getFood().description;
        vm.descriptionVendor = '';
        vm.openDescription = null;
        vm.readMore = 'Read more';

        var makeDescription = function (symbolNumber) {

            if (vm.descriptionContainer) {

                vm.descriptionVendor = vm.descriptionContainer.split('').slice(0, symbolNumber).join('').split(' ').slice(0, -1).join(' ') + '...';


            } else {

                //TODO localization msg or remove description block
                vm.descriptionVendor = ':-)'

            }


        };

        //TODO next few line just 4 my dev. burn, burn with angry after and uncomment (777)
        $scope.$watch(userServe.getUser, function() {

            vm.descriptionContainer = foodServe.getFood().description;
            makeDescription(symbolNumberConf);

        },true);

        //makeDescription(symbolNumberConf); (777)

        vm.descriptionToggle = function () {

            if (vm.openDescription === 'openDescription') {

                vm.openDescription = null;
                vm.readMore = 'Read more';
                makeDescription(symbolNumberConf);

            } else {

                vm.descriptionVendor = vm.descriptionContainer;
                vm.openDescription = 'openDescription';
                vm.readMore = 'Read less';

            }
        };
    }]);