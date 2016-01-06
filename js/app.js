angular.module('labApp', ['ui.router', 'modify', 'member', 'about', 'courses', 'home', 'publication', 'project'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'templates/about.html'
            })
            .state('members', {
                url: '/members',
                templateUrl: 'templates/members.html'
            })
            .state('courses', {
                url: '/courses',
                templateUrl: 'templates/courses.html'
            })
            .state('publications', {
                url: '/publications',
                templateUrl: 'templates/publication.html'
            })
            .state('projects', {
                url: '/projects',
                templateUrl: 'templates/project.html'
            })
            .state('modify', {
                url: '/open_sesame',
                templateUrl: 'templates/modify.html'
            })
    })
    .controller('navCtrl', function($scope) {
        $scope.nav_init = function() {
            angular.element(document).ready(function() {
                if($(window).width() > 700) {
                    $('.secondary.pointing.menu')
                        .visibility({
                            once: false,
                            onBottomPassed: function() {
                                $('.fixed.menu').transition('fade in');
                            },
                            onBottomPassedReverse: function() {
                                $('.fixed.menu').transition('fade out');
                            }
                        });
                }
                else {
                    // create sidebar and attach to menu open
                    $('.ui.sidebar')
                        .sidebar('attach events', '.toc.item', 'show');
                    $('.ui.vertical.inverted.sidebar.menu').children().click(function() {
                        $('.ui.sidebar').sidebar('hide');
                    });
                }

                $('.nav_item').on('click', function() {
                    $.smoothScroll({
                        scrollElement: $('body'),
                        scrollTarget: '#content'
                    });
                });
            })
        }
    })
