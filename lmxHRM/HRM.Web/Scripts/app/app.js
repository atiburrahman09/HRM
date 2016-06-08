﻿(function () {
    'use strict';

    angular.module('lmxHrm', ['common.core', 'common.ui'])
        .config(config);

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "Views/Home/Index.cshtml",
                controller: "homeCtlr"
            })
            .when("/status", {
                templateUrl: "Views/Department/CreateDepartment.cshtml",
                controller: "departmentCtrl"
            })
            //.when("/card", {
            //    templateUrl: "scripts/App/Card/cardpage.html",
            //    controller: "cardCtrl"
            //})
            //.when("/role", {
            //    templateUrl: "scripts/App/Role/rolePage.html",
            //    controller: "roleCtrl"
            //})
            //.when("/zone", {
            //    templateUrl: "scripts/App/AccessZone/zonepage.html",
            //    controller: "zoneCtrl"
            //})
            //.when("/device", {
            //    templateUrl: "scripts/App/Device/devicepage.html",
            //    controller: "deviceCtrl"
            //})
            //.when("/cardlog", {
            //    templateUrl: "scripts/App/CardLog/cardlogpage.html",
            //    controller: "cardLogCtrl"
            //})
            //.when("/usercard", {
            //    templateUrl: "scripts/App/UserCard/usercardpage.html",
            //    controller: "userCardCtrl"
            //})
            //.when("/devicecard", {
            //    templateUrl: "scripts/App/DeviceCard/devicecardpage.html",
            //    controller: "deviceCardCtrl"
            //})
            //.when("/user", {
            //    templateUrl: "scripts/App/User/userpage.html",
            //    controller: "userCtrl"
            //})
            //.when("/vehicle", {
            //    templateUrl: "scripts/App/Vehicle/vehiclepage.html",
            //    controller: "vehicleCtrl"
            //})
            /*.when("/customers/register", {
                templateUrl: "scripts/spa/customers/register.html",
                controller: "customersRegCtrl"
            })
            .when("/movies", {
                templateUrl: "scripts/spa/movies/movies.html",
                controller: "moviesCtrl"
            })
            .when("/movies/add", {
                templateUrl: "scripts/spa/movies/add.html",
                controller: "movieAddCtrl"
            })
            .when("/movies/:id", {
                templateUrl: "scripts/spa/movies/details.html",
                controller: "movieDetailsCtrl"
            })
            .when("/movies/edit/:id", {
                templateUrl: "scripts/spa/movies/edit.html",
                controller: "movieEditCtrl"
            })
            .when("/rental", {
                templateUrl: "scripts/spa/rental/rental.html",
                controller: "rentStatsCtrl"
            })*/
            .otherwise({ redirectTo: "/" });
    }

})();