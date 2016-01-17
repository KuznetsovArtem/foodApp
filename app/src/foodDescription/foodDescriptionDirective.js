/**
 * Created by 441N143G on 17.01.16.
 */
'use strict';

angular

    .module('foodApp')

.directive('foodDescription', [function () {

    return{

        templateUrl: '/src/foodDescription/foodDescription.html',

        scope:{},

        controller: 'foodDescriptionCtrl',

        controllerAs: 'vm',

        link: function () {

        }

    }


}])

    .controller('foodDescriptionCtrl', [function () {

}]);