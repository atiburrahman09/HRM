(function (app) {
    'use strict';

    app.factory('departmentFactory', departmentFactory);

    departmentFactory.$inject = ['$http'];

    function departmentFactory($http) {
        return {
            getDepartment: function () {
                return $http.get(baseUrl + "Department/getall");
            },
            addDepartment: function (department) {
                return $http.post(baseUrl + "Department/create", department);
            }
            
            //deleteZone: function (zone) {
            //    return $http.post(baseUrl + "Zones/delete/" + zone.Id);
            //},
            //updateZone: function (zone) {
            //    return $http.post(baseUrl + "Zones/edit/" + zone.Id, zone);
            //}
        };
    }

})(angular.module('lmxHrm'));