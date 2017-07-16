'use strict';

angular.module('zuhause')
        .controller('WifiController', ['$rootScope', '$scope', '$http', '$location',
            function ($rootScope, $scope, $http, $location) {
                $http.get("/api/router/full_config").then(function (response) {
                    console.log(response.data);
                    $scope.full = response.data;
                });

                $scope.device = function (value) {
                    $rootScope.device = value;
                    $location.path("/wifi/device");
                };

                $scope.pause = function (device) {
                    console.log("Pause", device);
                    $http.get("/api/router/rule/pause/" + device.idRule)
                            .then(function (response) {
                                console.log(response);
                                if (response.status === 200) {
                                    angular.forEach(response.data, function (value, key) {
                                        if (value.host === device.mac) {
                                            device.paused = (value.status === 1);
                                        }
                                    });
                                } else {
                                    alert("Ocorreu um erro!");
                                }
                            });
                };

                $scope.play = function (device) {
                    console.log("Play", device);
                    $http.get("/api/router/rule/play/" + device.idRule)
                            .then(function (response) {
                                console.log(response);
                                if (response.status === 200) {
                                    angular.forEach(response.data, function (value, key) {
                                        if (value.host === device.mac) {
                                            device.paused = (value.status === 1);
                                        }
                                    });
                                } else {
                                    alert("Ocorreu um erro!");
                                }
                            });
                };

            }
        ]);
