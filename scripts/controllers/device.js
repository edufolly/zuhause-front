'use strict';

angular.module('zuhause')
        .controller('DeviceController', ['$scope', '$http', '$routeParams',
            function ($scope, $http, $routeParams) {
                $scope.mac = $routeParams.mac;
            }
        ]);
