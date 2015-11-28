angular.module('about', [])
    .controller('aboutCtrl', function($scope, $http) {
        $scope.teacher = {};

        $scope.init_about = function() {
            $('.menu .item').tab();
            $http.get('data/about.dat')
                .success(function(res) {
                    $scope.teacher = res.teacher;
                })
                .error(function() {
                    alert('取得頁面資料錯誤，請聯絡管理員');
                })
        }
    })