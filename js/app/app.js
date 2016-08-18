angular.module('walletApp', [ 'ui.router' , 'walletApp.dashboard' ]).
config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home/home.html'
        })

        .state('home.new', {
            url: '/new',
            templateUrl: 'partials/home/home-new.html',
            controller: "latestCtrl"
        })

        .state('home.all', {
            url: '/all',
            templateUrl: 'partials/home/home-all.html',
            controller: "popularPhonesCtrl"
        })

     .state('costs', {
            url: '/costs',
            templateUrl: 'partials/costs/costs.html'
        })

        .state('costs.new', {
            url: '/new',
            templateUrl: 'partials/costs/costs-new.html',
          // controller: "DateAndTimePickerDemoCtrl"
        })

        .state('costs.all', {
            url: '/all',
            templateUrl: 'partials/costs/costs-all.html',
            controller: "popularPhonesCtrl"
             })

    .state('profits', {
            url: '/profits',
            templateUrl: 'partials/profits/profits.html'
        })

        .state('profits.new', {
            url: '/new',
            templateUrl: 'partials/profits/profits-new.html',
           controller: "latestCtrl"
        })

        .state('profits.all', {
            url: '/all',
            templateUrl: 'partials/profits/profits-all.html',
           controller: "popularPhonesCtrl"
        })

    .state('balance', {
            url: '/balance',
            templateUrl: 'partials/balance/balance.html'
        })


        .state('balance.all', {
            url: '/all',
            templateUrl: 'partials/balance/balance-all.html',
            controller: "latestCtrl"
        })

        .state('about', {
                url: '/about',

                views: {
                    '': {templateUrl: 'partials/about/about.html'},
                    'columnOne@about':
                    {templateUrl: 'partials/about/contact.html'},
                    'columnTwo@about': {
                        templateUrl: 'partials/about/table-data.html',
                        controller: 'dealsController',
                        scope: {
                            phones: "="
                        }
                    }
                }

            });

    });
angular.module("walletApp.dashboard", [
    "walletApp.dashboard.ctrl",
    "walletApp.dashboard.service",
    "walletApp.dashboard.Dateandtime"
]);
angular.module("walletApp.dashboard.ctrl", ['walletApp.dashboard.service','walletApp.dashboard.dealsController','walletApp.dashboard.latestCtrl', 'walletApp.dashboard.popularPhonesCtrl', "walletApp.dashboard.latestService",
"walletApp.dashboard.popularPhonesService"])
.controller("dashboardCtrl", ["$scope", "dashboardService", function ($scope, dashboardService) {
        var ctrl = this;


    }]);
angular.module("walletApp.dashboard.service", [])
    .factory("dashboardService", function ($http) {
        function getData() {
            return $http.get('js/data/data.json').then(function (response) {
                return response.data;
            });
        }

        return {
            getData: getData };
    });
angular.module("walletApp.dashboard.latestCtrl", ['walletApp.dashboard.service'])
    .controller("latestCtrl", ["$scope", "latestService", function ($scope, latestService) {
        $scope.latestes = [];
        latestService.getDataLatest().then(function (response) {
            $scope.latestes = response;
        });
    }]);
angular.module("walletApp.dashboard.latestService", [])
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
angular.module("walletApp.dashboard.popularPhonesCtrl", ['walletApp.dashboard.service'])
    .controller("popularPhonesCtrl", ["$scope", "popularPhonesService", function ($scope, popularPhonesService) {
        $scope.popularPhones = [];
        popularPhonesService.getDataPopularPhones().then(function (response) {
            $scope.popularPhones = response;
        });
    }]);
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
angular.module("walletApp.dashboard.dealsController", ['walletApp.dashboard.service'])
    .controller('dealsController', ["$scope", '$rootScope', 'dashboardService', function ($scope, $rootScope, dashboardService) {

        $scope.message = 'test';
        $scope.phones = [];

        dashboardService.getData().then(function (response) {
            $scope.phones = response;
        });


    }]);
angular.module('walletApp.dashboard.Dateandtime', ['ngAnimate', 'ui.bootstrap']);

angular.module('walletApp.dashboard.Dateandtime').controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
  };

  $scope.options = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  // Disable weekend selection
  function disabled(data) {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() {
    $scope.options.minDate = $scope.options.minDate ? null : new Date();
  };

  $scope.toggleMin();

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date(tomorrow);
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});

angular.module('walletApp.dashboard.Dateandtime').controller('TimepickerDemoCtrl', function ($scope, $log) {
  $scope.mytime = new Date();

  $scope.hstep = 1;
  $scope.mstep = 15;

  $scope.options = {
    hstep: [1, 2, 3],
    mstep: [1, 5, 10, 15, 25, 30]
  };

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = ! $scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.changed = function () {
    $log.log('Time changed to: ' + $scope.mytime);
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };
});