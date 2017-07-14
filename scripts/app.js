'use strict';

angular.module('zuhause', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
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
