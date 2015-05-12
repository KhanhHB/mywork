/*global define, require */

define(['app'], function (app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

            $stateProvider
                .state('login', {
                    url: "/login",
                    templateUrl: "templates/login.html",
                    controller: 'LoginCtrl'
                })

            $urlRouterProvider.otherwise('/login');
}]);

