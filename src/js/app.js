var app;
(function () {
   'use strict';


    app = angular
        .module('helloShane',  ['ngRoute' ])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            when('/', {
                title: 'Home',
                templateUrl: 'partials/index.html',
                controller: 'IndexCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });

        }])
        .run([function(){
            // and this is executed after boot
        }])
        .controller('IndexCtrl', function($scope) {
            // and i am a controller
            $scope.say = "Hello";
        }
        )
    ;
}());