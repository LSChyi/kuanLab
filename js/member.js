angular.module('member', [])
    .controller('memberCtrl', function($scope, $http) {
        $scope.members = [];

        $scope.init_member = function() {
            $http.get('data/members.html')
                .success(function(res) {
                    $scope.members = res;
                })
        }
    })