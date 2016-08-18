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


