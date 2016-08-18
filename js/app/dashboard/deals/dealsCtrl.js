angular.module("walletApp.dashboard.dealsController", ['walletApp.dashboard.service'])
    .controller('dealsController', ["$scope", '$rootScope', 'dashboardService', function ($scope, $rootScope, dashboardService) {

        $scope.message = 'test';
        $scope.phones = [];

        dashboardService.getData().then(function (response) {
            $scope.phones = response;
        });


    }]);
