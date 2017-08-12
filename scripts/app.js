'use strict';

angular.module('zuhause', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
]);

angular.module('zuhause')
        .config(['$locationProvider',
            function ($locationProvider) {
                $locationProvider.hashPrefix('');
                $locationProvider.html5Mode({
                    enabled: false,
                    requireBase: true
                });
            }]);
