'use strict';

angular.module('zuhause')
        .controller('TemperatureController', ['$scope', '$http',
            function ($scope, $http) {

                $http.get("/api/datatable/temp/interna").then(function (response) {
                    var options = {
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                    ticks: {
                                        beginAtZero: false
                                    },
                                    gridLines: {
                                        display: true
                                    }
                                }],
                            xAxes: [{
                                    gridLines: {
                                        display: false
                                    }
                                }]
                        }
                    };

                    Chart.Line('myChart', {
                        options: options,
                        data: response.data
                    });

                });
            }
        ]);
