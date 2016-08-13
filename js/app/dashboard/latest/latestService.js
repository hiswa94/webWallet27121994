angular.module("catalogApp.dashboard.latestService", [])
    .factory("latestService", function (dashboardService) {
        var responseData;

        function getDataLatest() {
           return dashboardService.getData().then(function (response) {
             var  sortData = _.sortBy(response, function(o) { return o.date; }).reverse();

               return  responseData=sortData;
            });
          }

        return {getDataLatest: getDataLatest};
    });
