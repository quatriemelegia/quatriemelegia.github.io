'use strict';

// Declare app level module which depends on filters, and services
var module = angular.module('uniteEnOr', [
    'ngResource',
    'ui.bootstrap',
    'ui.router',
]);


module.run(
    function ($rootScope, $state, $stateParams, $injector) {

        $rootScope.$on('$stateChangeError',
            function(event, toState, toParams, fromState, fromParams, error){
                alert (error)
                console.log(error.stack)
            }
        )


        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
        // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
)

module.config(
    function ($stateProvider, $urlRouterProvider, $httpProvider) {

        /////////////////////////////
        // Redirects and Otherwise //
        /////////////////////////////

        // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
        $urlRouterProvider

            // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
            // Here we are just setting up some convenience urls.
//            .when('/', '/farm/:farmId/home')
//            .when('/farm/:farmId', '/farm/:farmId/home')

            // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
//            .otherwise('/farm/:farmId/home');
        // There is a bug that forces me to do that way (because of event.preventDefault in $stateChangeStart that kills the re-routing)
            .otherwise( function($injector, $location) {
                 var $state = $injector.get("$state");
                 $state.go("main");
             });

        //////////////////////////
        // State Configurations //
        //////////////////////////

        // Use $stateProvider to configure your states.
        $stateProvider

            .state("main", {
                templateUrl: 'js/main/main.html',
                controller: 'MainCtrl'
            })
            .state("solution", {
                templateUrl: 'js/main/solution.html',
                controller: 'MainCtrl',
                url:'/solution',
            })

    }
);


module.controller('MainCtrl', function ($scope, $http, $state) {

})
