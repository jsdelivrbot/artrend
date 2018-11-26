/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

var myApp = angular.module('myApp', []);

myApp.controller('UsersController', ['$scope', '$http', '$location', function($scope, $http, $location) {
    console.log('usersController loaded...');

    $scope.getUsers = function () {
        $http.get('/api/users')
            .then(function (response) {
                $scope.users = response.data;
            });
    };

    $scope.logInData = {};

    $scope.logIn = function () {
        $http({
            url: "/api/users/login",
            method: "POST",
            data: $.param($scope.logInData),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then(function(data, status, headers, config) {
            console.log('logged in...');
            console.log(data);
            $scope.status = status;
        });
    }

}]);