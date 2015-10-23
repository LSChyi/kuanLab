angular.module('about', [])
    .controller('aboutCtrl', function($scope, $http) {
        $scope.teacher = {};

        $scope.init_about = function() {
            $('.menu .item').tab();
        }
    })