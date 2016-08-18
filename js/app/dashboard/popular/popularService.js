angular.module("walletApp.dashboard.popularPhonesService", [])
    .factory("popularPhonesService", function (dashboardService) {
        var responseData;
        function getDataPopularPhones() {
            return dashboardService.getData().then(function (response) {
               var sortData= _.groupBy(response, {popular: true});
                responseData=sortData.true;
                return  responseData;
            });
        }

        return { getDataPopularPhones: getDataPopularPhones };
    });
