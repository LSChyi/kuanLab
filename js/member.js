angular.module('member', [])
    .controller('memberCtrl', function($scope, $http) {
        $scope.members = [];

        $scope.init_member = function() {
            $http.get('data/members.html')
                .success(function(res) {
                    $scope.members = res;
                })
                .error(function() {
                    alert("發生錯誤，請聯絡管理人");
                })
        }
    })