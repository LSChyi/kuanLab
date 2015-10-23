angular.module('labApp', ['ui.router', 'modify'])
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
                url: '/members',
                templateUrl: 'templates/members.html'
            })
            .state('reports', {
                url: '/reports'
            })
            .state('link_resoreces', {
                url: '/link_resoreces'
            })
            .state('modify', {
                url: '/open_sesame',
                templateUrl: 'templates/modify.html'
            })
    })
    .controller('navCtrl', function($scope) {
        $scope.nav_init = function() {
            angular.element(document).ready(function() {
                $('.img-header-text')
                    .visibility({
                        once: false,
                        onTopPassed: function() {
                            $('.fixed.menu').transition('fade in');
                        },
                        onTopPassedReverse: function() {
                            $('.fixed.menu').transition('fade out');
                        }
                    });

                // create sidebar and attach to menu open
                $('.ui.sidebar')
                    .sidebar('attach events', '.toc.item');

            })
        }
    })
