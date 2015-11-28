angular.module('project', [ '720kb.datepicker' ])
    .controller('projectCtrl', function($scope, $http) {
        $scope.init_project = function() {
            $http.get('data/projects.html')
                .success(function(res) {
                    console.log(res);
                })
                .error(function() {
                    alert('取得專案資料錯誤，請聯絡管理員');
                })
        }
    })