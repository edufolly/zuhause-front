'use strict';

angular.module('zuhause')
        .controller('TowerController', ['$scope', '$http',
            function ($scope, $http) {

                var getType = function (percent) {
                    if (percent < 25) {
                        return 'success';
                    } else if (percent < 50) {
                        return 'info';
                    } else if (percent < 75) {
                        return 'warning';
                    }
                    return 'danger';
                };

                $http.get("/api/raspi/disk").then(function (response) {
                    angular.forEach(response.data, function (value) {
                        if (value['Montado em'] === '/') {
                            var usado = parseInt(value['Usado']);
                            var total = usado + parseInt(value['Disponível']);
                            var percent = Math.ceil(usado / total * 100);

                            $scope.discPart = value['Montado em'];
                            $scope.discType = getType(percent);
                            $scope.discValue = usado;
                            $scope.discMax = total;
                            $scope.discPercent = value['Uso%'];
                        }
                    });
                });

                $http.get("/api/raspi/ram").then(function (response) {
                    var ram = response.data[0];
                    var usado = parseInt(ram.used);
                    var total = parseInt(ram.total);
                    var percent = Math.ceil(usado / total * 100);

                    $scope.ramType = getType(percent);
                    $scope.ramValue = usado;
                    $scope.ramMax = total;
                    $scope.ramPercent = percent + "%";
                });

                $http.get("/api/raspi/proc").then(function (response) {
                    angular.forEach(response.data, function (value) {
                        if (value['CPU'] === 'all') {
                            var usado = 100.0 - parseFloat(value['%idle'].replace(new RegExp(',', 'g'), '.'));
                            var total = 100;
                            var percent = Math.ceil(usado);

                            $scope.procType = getType(percent);
                            $scope.procValue = percent;
                            $scope.procMax = total;
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
