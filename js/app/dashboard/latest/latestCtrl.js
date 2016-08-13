angular.module("catalogApp.dashboard.latestCtrl", ['catalogApp.dashboard.service'])
    .controller("latestCtrl", ["$scope", "latestService", function ($scope, latestService) {
        $scope.latestes = [];
        latestService.getDataLatest().then(function (response) {
            $scope.latestes = response;
        });
    }]);
