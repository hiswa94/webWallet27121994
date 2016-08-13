angular.module("catalogApp.dashboard.dealsController", ['catalogApp.dashboard.service'])
    .controller('dealsController', ["$scope", '$rootScope', 'dashboardService', function ($scope, $rootScope, dashboardService) {

        $scope.message = 'test';
        $scope.phones = [];

        dashboardService.getData().then(function (response) {
            $scope.phones = response;
        });


    }]);
