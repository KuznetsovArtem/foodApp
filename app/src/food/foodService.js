/**
 * Created by askuznetsov on 12/21/2015.
 */

angular

    .module('foodApp')

    //TODO fix this. create 4 dev
    .factory('foodService', [function () {

        var currentFood = {

            "name": "pizza",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci ducimus enim maxime? Inventore iure porro quam. Asperiores beatae debitis eaque facilis iste perferendis possimus suscipit! Accusantium ad beatae corporis exercitationem inventore ipsam labore quae quas quia, quos repellat tenetur voluptas voluptate! Consectetur, error perferendis? Consequatur dolorem nulla obcaecati quia voluptates!"

        };

        return {

            getFood: function () {

                return currentFood;

            },

            getDescription: function () {

                return currentFood.description;

            }

        }

    }]);