angular.module('courses', [])
    .controller('coursesCtrl', function($scope, $http) {
        $scope.init_courses = function() {
            $http.get('data/courses.html')
                .success(function(res) {
                    $scope.courses = res;
                    console.log($scope.courses);
                    console.log(res);
                })
                .error(function() {
                    alert("發生錯誤，請聯絡管理人");
                })
        }
    })