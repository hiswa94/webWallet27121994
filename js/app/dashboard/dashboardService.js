angular.module("catalogApp.dashboard.service", [])
    .factory("dashboardService", function ($http) {
        function getData() {
            return $http.get('js/data/data.json').then(function (response) {
                return response.data;
            });
        }

        return {
            getData: getData };
    });
