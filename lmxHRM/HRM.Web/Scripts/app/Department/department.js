(function (app) {
    'use strict';

    app.controller('departmentCtrl', departmentCtrl);

    departmentCtrl.$inject = ['$scope', 'departmentFactory', 'notificationService'];

    function departmentCtrl($scope, departmentFactory, notificationService) {
        console.log("Into Script");
        $scope.departments = [];
        $scope.addMode = false;
        $scope.newDepartment = {};
        var editMode = false;

        departmentFactory.getDepartment().success(function (data) {
            $scope.departments = data;
        }).error(function () {
            notificationService.displayError("Could not load data");
            console.log("Could not retrieve data from server");
        });

        $scope.toggleAddMode = function () {
            $scope.addMode = !$scope.addMode;
        };

        $scope.toggleEditMode = function (item) {
            item.editMode = !item.editMode;
        };

        $scope.addDepartment = function () {
            console.log("Into Script");
            departmentFactory.addDepartment($scope.newDepartment)
                .success(function (data) {
                    $scope.departments.push(data);
                    $scope.newDepartment = {};
                    $scope.toggleAddMode();
                })
                .error(function (err) {
                    notificationService.displayError("Could not add data");
                    console.log(err);
                })
        };

        //$scope.deleteZone = function (zone) {
        //    zoneFactory.deleteZone(zone)
        //        .success(function (data) {
        //            helperLib.deleteItem(zone, $scope.zones);
        //        })
        //        .error(function (err) {
        //            notificationService.displayError("Could not delete data");
        //            console.log(err);
        //        })
        //};

        //$scope.updateZone = function (zone) {
        //    zoneFactory.updateZone(zone)
        //        .success(function (data) {
        //            zone.editMode = false;
        //        })
        //        .error(function (err) {
        //            notificationService.displayError("Could not update data");
        //            console.log(err)
        //        })
        //};



    }


})(angular.module('lmxHrm'));