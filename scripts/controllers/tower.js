'use strict';

angular.module('zuhause')
        .controller('TowerController', ['$scope', '$http',
            function ($scope, $http) {

                var getType = function (percent) {
//                    if (percent < 25) {
//                        return 'md-primary';
//                    } else if (percent < 50) {
//                        return 'md-primary';
//                    } else if (percent < 75) {
//                        return 'md-warn';
//                    }
                    return 'md-warn';
                };

                $http.get("/api/raspi/disk").then(function (response) {
                    angular.forEach(response.data, function (value) {
                        if (value['Mounted on'] === '/') {
                            var usado = parseInt(value['Used']);
                            var total = usado + parseInt(value['Available']);
                            var percent = Math.ceil(usado / total * 100);

                            $scope.discPart = value['Mounted on'];
                            $scope.discType = getType(percent);
                            $scope.discValue = percent;
                            $scope.discPercent = percent + "%";
                        }
                    });
                });

                $http.get("/api/raspi/ram").then(function (response) {
                    var ram = response.data[0];
                    var usado = parseInt(ram.used);
                    var total = parseInt(ram.total);
                    var percent = Math.ceil(usado / total * 100);

                    $scope.ramType = getType(percent);
                    $scope.ramValue = percent;
                    $scope.ramPercent = percent + "%";
                });

                $http.get("/api/raspi/proc").then(function (response) {
                    angular.forEach(response.data, function (value) {
                        if (value['CPU'] === 'all') {
                            var usado = 100.0 - parseFloat(value['%idle'].replace(new RegExp(',', 'g'), '.'));
                            var percent = Math.ceil(usado);

                            $scope.procType = getType(percent);
                            $scope.procValue = percent;
                            $scope.procPercent = percent + '%';
                        }
                    });
                });

                $http.get("/api/raspi/uptime").then(function (response) {
                    $scope.uptime = response.data.uptime;
                });

                $http.get("/api/raspi/temp").then(function (response) {
                    $scope.temp = response.data.raw;
                });

                $http.get("/api/raspi/volts").then(function (response) {
                    $scope.volts = response.data.raw;
                });

                $scope.processos = function () {
                    $http.get("/api/raspi/top").then(function (response) {
                        $scope.top = response.data;
                    });
                };
            }
        ]);
