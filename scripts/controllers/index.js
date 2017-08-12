'use strict';

angular.module('zuhause')
        .controller('IndexController', ['$scope', '$timeout', '$mdSidenav', '$http',
            function ($scope, $timeout, $mdSidenav, $http) {

                $scope.toggleLeft = buildToggler('left');
                $scope.toggleRight = buildToggler('right');

                function buildToggler(componentId) {
                    return function () {
                        $mdSidenav(componentId).toggle();
                    };
                }

                $scope.tempInterna = "??";
                $scope.umidInterna = "??";

                $http.get("/api/temp/interna").then(function (response) {
                    $scope.tempInterna = response.data.t + "˚C";
                    $scope.umidInterna = response.data.h + "%";
                });

            }
        ]);
