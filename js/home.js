angular.module('home', [])
    .controller('homeCtrl', function($scope, $http) {
        $scope.init_home = function() {
            $http.get('data/home.html')
                .success(function(res) {
                    $scope.home = res;
                })
                .error(function() {
                    alert("發生錯誤，請聯絡管理人");
                })
        }
    })