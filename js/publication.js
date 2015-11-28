angular.module('publication', [])
    .controller('publicationCtrl', function($scope, $http) {
        $scope.init_publicaion = function() {
            $http.get('data/publication.html')
                .success(function(res) {
                    console.log(res);
                })
                .error(function() {
                    alert('取得著作失敗，請聯絡管理員');
                })
        }
    })