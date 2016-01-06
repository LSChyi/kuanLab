angular.module('courses', [])
    .controller('coursesCtrl', function($scope, $http) {
        $scope.init_courses = function() {
            $http.get('data/courses.dat')
                .success(function(res) {
                    $scope.courses = res;
                })
                .error(function() {
                    alert("發生錯誤，請聯絡管理人");
                })
        }
    })