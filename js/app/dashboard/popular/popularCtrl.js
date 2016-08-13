angular.module("catalogApp.dashboard.popularPhonesCtrl", ['catalogApp.dashboard.service'])
    .controller("popularPhonesCtrl", ["$scope", "popularPhonesService", function ($scope, popularPhonesService) {
        $scope.popularPhones = [];
        popularPhonesService.getDataPopularPhones().then(function (response) {
            $scope.popularPhones = response;
        });
    }]);
