angular.module('labApp', [ 'ui.router' ])
    .config(function($stateProvider, $urlRouterProvider) {
         $urlRouterProvider.otherwise("/home");

         $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
            })
            .state('about', {
                url: '/about'
            })
            .state('activities', {
                url: '/activities'
            })
            .state('members', {
                url: '/members'
            })
            .state('reports', {
                url: '/reports'
            })
            .state('link_resoreces', {
                url: '/link_resoreces'
            })
    })