'use strict';

angular.module('zuhause')
        .controller('WifiController', ['$scope', '$http', '$location',
            function ($scope, $http, $location) {
                $http.get("/api/router/full_config").then(function (response) {
                    $scope.full = response.data;
                });

                $scope.device = function (value) {
                    $location.path("device/" + value.mac);
                };
            }
        ]);
