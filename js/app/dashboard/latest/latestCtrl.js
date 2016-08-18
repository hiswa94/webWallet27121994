angular.module("walletApp.dashboard.latestCtrl", ['walletApp.dashboard.service'])
    .controller("latestCtrl", ["$scope", "latestService", function ($scope, latestService) {
        $scope.latestes = [];
        latestService.getDataLatest().then(function (response) {
            $scope.latestes = response;
        });
    }]);
