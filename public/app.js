/*
 * Project: artrend
 * Author: Max Surgai / maxsurgai.com
 * Copyright (c) 2018.
 */

var myApp = angular.module('myApp', []);

myApp.config(["$locationProvider", function ($locationProvider) {

    $locationProvider.hashPrefix('');
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true
    });

}]);