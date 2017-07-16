'use strict';

angular.module('zuhause')
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider
                        .when('/home', {
                            templateUrl: 'views/home.html',
                            controller: 'HomeController'
                        })
                        .when('/tower', {
                            templateUrl: 'views/tower.html',
                            controller: 'TowerController'
                        })
                        .when('/wifi', {
                            templateUrl: 'views/wifi.html',
                            controller: 'WifiController'
                        })
                        .when('/wifi/device', {
                            templateUrl: 'views/device.html',
                            controller: 'DeviceController'
                        })
                        .otherwise({redirectTo: '/home'});
            }]);



