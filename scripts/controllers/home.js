'use strict';

angular.module('zuhause')
        .controller('HomeController', ['$scope', '$http',
            function ($scope, $http) {

                $scope.luzSuite = function () {
                    $http.get("/api/luz/suite").then(function (response) {
                        console.log(response);
                    });
                };

                $scope.luzEscritorio = function () {
                    $http.get("/api/luz/escritorio").then(function (response) {
                        console.log(response);
                    });
                };

                $scope.luzSala = function () {
                    $http.get("/api/luz/sala").then(function (response) {
                        console.log(response);
                    });
                };

                $scope.luzCozinha = function () {
                    $http.get("/api/luz/cozinha").then(function (response) {
                        console.log(response);
                    });
                };

                $scope.luzEscadaTeto = function () {
                    $http.get("/api/luz/escada_teto").then(function (response) {
                        console.log(response);
                    });
                };

                $scope.luzEscadaParede = function () {
                    $http.get("/api/luz/escada_parede").then(function (response) {
                        console.log(response);
                    });
                };

                $scope.luzFrente = function () {
                    $http.get("/api/luz/frente").then(function (response) {
                        console.log(response);
                    });
                };

                $scope.releOff = function () {
                    $http.get("/api/rele/off").then(function (response) {
                        console.log(response);
                    });
                };

                $scope.releOn = function () {
                    $http.get("/api/rele/on").then(function (response) {
                        console.log(response);
                    });
                };

            }
        ]);
