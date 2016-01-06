angular.module('project', [ '720kb.datepicker' ])
    .controller('projectCtrl', function($scope, $http) {
        $scope.init_project = function() {
            $http.get('data/projects.dat')
                .success(function(res) {
                    $scope.projects = res.reverse();
                })
                .error(function() {
                    alert('取得專案資料錯誤，請聯絡管理員');
                })
        }
    })