'use strict';

angular.module('zuhause')
        .controller('DeviceController', ['$rootScope', '$scope', '$http',
            function ($rootScope, $scope, $http) {
                $scope.device = $rootScope.device;

                $scope.ruleCreate = function () {
                    console.log($scope.device);
                    $http.get("/api/router/rule/create/" + $scope.device.mac)
                            .then(function (response) {
                                console.log(response);
                                if (response.status === 200) {
                                    angular.forEach(response.data, function (value, key) {
                                        if (value.host === $scope.device.mac) {
                                            $scope.device.idHost = value.idHost;
                                            $scope.device.idRule = key;
                                            $scope.device.paused = (value.status === 1);
                                        }
                                    });
                                } else {
                                    alert("Ocorreu um erro!");
                                }
                            });

                };

                $scope.pause = function () {
                    console.log("Pause", $scope.device);
                    $http.get("/api/router/rule/pause/" + $scope.device.idRule)
                            .then(function (response) {
                                console.log(response);
                                if (response.status === 200) {
                                    angular.forEach(response.data, function (value, key) {
                                        if (value.host === $scope.device.mac) {
                                            $scope.device.paused = (value.status === 1);
                                        }
                                    });
                                } else {
                                    alert("Ocorreu um erro!");
                                }
                            });
                };

                $scope.play = function () {
                    console.log("Play", $scope.device);
                    $http.get("/api/router/rule/play/" + $scope.device.idRule)
                            .then(function (response) {
                                console.log(response);
                                if (response.status === 200) {
                                    angular.forEach(response.data, function (value, key) {
                                        if (value.host === $scope.device.mac) {
                                            $scope.device.paused = (value.status === 1);
                                        }
                                    });
                                } else {
                                    alert("Ocorreu um erro!");
                                }
                            });
                };

            }
        ]);
