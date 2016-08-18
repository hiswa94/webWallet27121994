angular.module("walletApp.dashboard.popularPhonesCtrl", ['walletApp.dashboard.service'])
    .controller("popularPhonesCtrl", ["$scope", "popularPhonesService", function ($scope, popularPhonesService) {
        $scope.popularPhones = [];
        popularPhonesService.getDataPopularPhones().then(function (response) {
            $scope.popularPhones = response;
        });
    }]);
