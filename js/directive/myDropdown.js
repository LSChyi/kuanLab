angular.module('myDropdown', [])
    .directive('titleDropdown', function($timeout) {
        return {
            restrict: 'E',
            templateUrl: 'templates/directive/titleDropdown.html',
            scope: {
                member: '=',
                select: '='
            },
            link: function(scope, element, attr){
                $timeout(function(){
                    $('.ui.dropdown').dropdown();
                });
            }
        }
    })